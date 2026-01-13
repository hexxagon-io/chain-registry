const glob = require('glob-promise')
const path = require('path')
const axios = require('axios')
const { Buffer } = require('buffer')
const { Hash } = require('@keplr-wallet/crypto')
const { AccAddress } = require('@hexxagon/feather.js')
const fs = require('fs').promises

function dedupeBy(arr, keyFn) {
  const seen = new Set()
  const out = []

  for (const item of arr) {
    const key = keyFn(item)
    if (seen.has(key)) continue
    seen.add(key)
    out.push(item)
  }

  return out
}

async function fetchTerraportTokens(chainId) {
  const url =
    'https://service.terraport.finance/degen/tokens?q=&whitelisted=true&offset=0&limit=100'

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Terraport tokens fetch failed (${chainId})`)
  }

  return await res.json()
}

async function fetchTerraswapTokens(chainId) {
  const url =
    chainId === 'columbus-5'
      ? 'https://api-classic.terraswap.io/v2/tokens'
      : 'https://api.terraswap.io/tokens'

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Terraswap tokens fetch failed (${chainId})`)
  }

  return await res.json()
}

async function fetchAstroportTokens(chainId) {
  const url =
    'https://app.astroport.fi/api/trpc/tokens.byChain?input=' +
    encodeURIComponent(JSON.stringify({ json: { chainId } }))

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Astroport tokens.byChain failed (${chainId})`)
  }

  const data = await res.json()
  return data?.result?.data?.json?.tokens || {}
}

/* ============================================================
   Terraport
   ============================================================ */

async function getTerraportData(chainId) {
  if (!['columbus-5'].includes(chainId)) return { pairs: [], tokens: [] }

  const SOURCE_URL = 'https://service.terraport.finance/pairs'

  const res = await fetch(SOURCE_URL)
  if (!res.ok) {
    throw new Error(`Terraport fetch failed: ${res.status}`)
  }

  const pairs = await res.json()

  /* ===============================
     PAIRS
     =============================== */

  const extractedPairs = pairs
    .filter((p) => p.active && p.verified)
    .map((p) => {
      if (!p.asset_infos || p.asset_infos.length !== 2) return null

      const [a, b] = p.asset_infos
      if (a.type === 'native' && b.type === 'native') return null

      return {
        token: p.contract_addr,
        dex: 'terraport',
        type: 'xyk',
        assets: [
          a.type === 'native' ? a.denom : a.contract_addr,
          b.type === 'native' ? b.denom : b.contract_addr,
        ],
      }
    })
    .filter(Boolean)

  /* ===============================
     TOKENS
     =============================== */

  const tokens = await fetchTerraportTokens(chainId)

  if (!Array.isArray(tokens)) {
    throw new Error(`Unexpected Terraport tokens response (${chainId})`)
  }

  const extractedTokens = tokens
    .filter((t) => t.verified)
    .filter((t) => {
      const addr = t.contract_addr
      if (!addr) return false
      return addr.startsWith('terra1') || addr.startsWith('ibc/')
    })
    .map((t) => ({
      token: t.contract_addr,
      protocol: t.name,
      symbol: t.denom,
      name: t.name,
      icon: t.img,
      decimals: t.decimals ?? 6,
    }))

  return {
    pairs: extractedPairs,
    tokens: extractedTokens,
  }
}

/* ============================================================
   Terraswap
   ============================================================ */

async function getTerraswapData(chainId) {
  if (!['columbus-5', 'phoenix-1'].includes(chainId))
    return { pairs: [], tokens: [] }

  const SOURCE_URL =
    chainId === 'columbus-5'
      ? 'https://api-classic.terraswap.io/v2/pairs?unverified=true'
      : 'https://api.terraswap.io/pairs?unverified=true'

  const res = await fetch(SOURCE_URL)
  if (!res.ok) {
    throw new Error(`Terraswap fetch failed (${chainId})`)
  }

  const data = await res.json()

  // ✅ BOTH endpoints return { pairs: [...] }
  if (!Array.isArray(data.pairs)) {
    throw new Error(`Unexpected Terraswap ${chainId} response format`)
  }

  /* ===============================
     PAIRS
     =============================== */

  const extractedPairs = data.pairs
    .map((p) => {
      if (!p.asset_infos || p.asset_infos.length !== 2) return null

      const [a, b] = p.asset_infos

      // 🚫 skip native ↔ native
      if (a.native_token && b.native_token) return null

      return {
        token: p.contract_addr,
        dex: 'terraswap',
        type: 'xyk',
        assets: [
          a.native_token ? a.native_token.denom : a.token.contract_addr,
          b.native_token ? b.native_token.denom : b.token.contract_addr,
        ],
      }
    })
    .filter(Boolean)

  /* ===============================
     TOKENS
     =============================== */

  const tokens = await fetchTerraswapTokens(chainId)

  if (!Array.isArray(tokens)) {
    throw new Error(`Unexpected Terraswap tokens response (${chainId})`)
  }

  const extractedTokens = tokens
    .filter((t) => t.verified)
    .filter((t) => {
      const addr = t.contract_addr
      if (!addr) return false
      return addr.startsWith('terra1') || addr.startsWith('ibc/')
    })
    .map((t) => ({
      token: t.contract_addr,
      protocol: t.name,
      symbol: t.symbol,
      name: t.name,
      icon: t.icon,
      decimals: t.decimals ?? 6,
    }))

  return {
    pairs: extractedPairs,
    tokens: extractedTokens,
  }
}

/* ============================================================
   Astroport
   ============================================================ */

async function getAstroportData(chainId, prefix) {
  if (!['phoenix-1', 'neutron-1'].includes(chainId))
    return { pairs: [], tokens: [] }

  /* ===============================
     POOLS → PAIRS
     =============================== */

  const poolsRes = await fetch(
    `https://api.astroport.fi/api/pools?chainId=${chainId}`
  )

  if (!poolsRes.ok) {
    throw new Error(`Astroport pools fetch failed (${chainId})`)
  }

  const pools = await poolsRes.json()

  if (!Array.isArray(pools)) {
    throw new Error(`Unexpected Astroport pools response (${chainId})`)
  }

  const extractedPairs = pools
    .filter((p) => !p.isDeregistered && p.poolType === 'xyk')
    .map((p) => {
      if (!p.assets || p.assets.length !== 2) return null

      const [a, b] = p.assets
      const nativeA = !a.denom?.startsWith(prefix)
      const nativeB = !b.denom?.startsWith(prefix)

      // 🚫 skip native ↔ native
      if (nativeA && nativeB) return null

      return {
        token: p.poolAddress,
        dex: 'astroport',
        type: 'xyk',
        assets: [a.denom, b.denom],
      }
    })
    .filter(Boolean)

  /* ===============================
     TOKENS
     =============================== */

  const tokensByChain = await fetchAstroportTokens(chainId)

  const extractedTokens = Object.values(tokensByChain)
    .filter((t) => !t.isHidden)
    .filter((t) => {
      const addr = t.token
      if (!addr) return false
      return addr.startsWith(prefix) || addr.startsWith('ibc/')
    })
    .map((t) => ({
      token: t.token,
      symbol: t.symbol,
      name: t.symbol,
      icon: t.icon,
      decimals: t.decimals ?? 6,
    }))

  return {
    pairs: extractedPairs,
    tokens: extractedTokens,
  }
}

;(async () => {
  // create build directory
  fs.mkdir('./build', { recursive: true })

  // convert chains to json
  const chains = {}
  const chains2 = {}
  const chainsOutPath = './build/chains.json'
  const chains2OutPath = './build/chains2.json'

  const chainFiles = await glob('./chains/*/*.js')

  let tokens = []
  let cw20Contracts = []
  let dexPairs = []
  let nftContracts = []

  await Promise.all(
    chainFiles.map(async (file) => {
      const [_, folder, network, fileName] = file.split('/')
      const filenameWithoutExtension = path.basename(file, path.extname(file))

      if (typeof chains[network] === 'undefined') {
        chains[network] = {}
        chains2[network] = {}
      }

      const fullPath = `./${file}`
      const chainData = require(fullPath)

      if (network !== 'localterra' && !isValidUrl(chainData.lcd)) {
        console.log(`${chainData.chainID}: Invalid LCD URL: ${chainData.lcd}`)
        return
      }

      if (network === 'mainnet') {
        const registryName = chainData.chainRegistryName
        let mappedName = registryName
        if (registryName === 'terra') {
          mappedName = 'terra-classic'
        } else if (registryName === 'terra2') {
          mappedName = 'terra'
        }

        chainData.lcd = `https://lcd.${mappedName}.hexxagon.io`
        chainData.rpc = `https://rpc.${mappedName}.hexxagon.io`
      }

      const dexResults = await Promise.all([
        getTerraportData(chainData.chainID),
        getTerraswapData(chainData.chainID),
        getAstroportData(chainData.chainID, chainData.prefix),
      ])

      tokens.push(
        ...(chainData.tokens ?? []).map((t) => ({
          ...t,
          chainID: chainData.chainID,
          network,
        }))
      )

      tokens.push(
        ...(chainData.cw20Tokens ?? []).map((t) => ({
          ...t,
          chainID: chainData.chainID,
          network,
        }))
      )

      tokens.push(
        ...dexResults
          .flatMap((r) => r.tokens ?? [])
          .map((t) => ({
            ...t,
            chainID: chainData.chainID,
            network,
          }))
      )

      cw20Contracts.push(
        ...(chainData.cw20Contracts ?? []).map((t) => ({
          ...t,
          chainID: chainData.chainID,
          network,
        }))
      )

      dexPairs.push(
        ...(chainData.dexPairs ?? []).map((t) => ({
          ...t,
          chainID: chainData.chainID,
          network,
        }))
      )

      dexPairs.push(
        ...dexResults
          .flatMap((r) => r.pairs ?? [])
          .map((t) => ({
            ...t,
            chainID: chainData.chainID,
            network,
          }))
      )

      nftContracts.push(
        ...(chainData.nftContracts ?? []).map((t) => ({
          ...t,
          chainID: chainData.chainID,
          network,
        }))
      )

      // dedupe
      tokens = dedupeBy(tokens, (t) => `${t.network}:${t.chainID}:${t.token}`)

      dexPairs = dedupeBy(
        dexPairs,
        (p) => `${p.network}:${p.chainID}:${p.dex}:${p.token}`
      )

      cw20Contracts = dedupeBy(
        cw20Contracts,
        (c) => `${c.network}:${c.chainID}:${c.contract}`
      )

      nftContracts = dedupeBy(
        nftContracts,
        (n) => `${n.network}:${n.chainID}:${n.contract}`
      )

      const version = await getSDKVersion(chainData.lcd)
      if (version) chainData.version = version

      delete chainData['tokens']
      delete chainData['cw20Tokens']
      delete chainData['cw20Contracts']
      delete chainData['dexPairs']
      delete chainData['nftContracts']

      const gasPrices = Object.fromEntries(
        await Promise.all(
          Object.entries(chainData.gasPrices).map(async ([key, value]) => {
            if (typeof value === 'number') {
              return [key, value]
            } else {
              if (value.type === 'OSMOSIS') {
                try {
                  const { data } = await axios.get(value.url, {
                    baseURL: chainData.lcd,
                  })
                  return [key, Number(data.base_fee) * value.adjustment]
                } catch (e) {
                  console.error(e)
                  console.error(
                    `Failed to get the gas price from ${value.url} on ${chainData.lcd}`
                  )
                  return [key, value.defaultValue]
                }
              }
            }
          })
        )
      )

      chains[network][chainData.chainID] = { ...chainData, gasPrices }
      chains2[network][filenameWithoutExtension] = { ...chainData, gasPrices }
    })
  )

  // convert coins to json
  const coinsOutPath = './build/denoms.json'
  const coinsOut = {}
  const ibcDenomMapOutPath = './build/ibc.json'
  const ibcDenomMapOutPathV2 = './build/ibc_tokens.json'
  const ibcDenomMapOut = {}

  tokens.forEach((token) => {
    const { network, chainID, ...coinData } = token

    if (typeof coinsOut[network] === 'undefined') {
      coinsOut[network] = {}
    }
    if (typeof ibcDenomMapOut[network] === 'undefined') {
      ibcDenomMapOut[network] = {}
    }

    const tokenId = [chainID, coinData.token].join(':')

    coinsOut[network][tokenId] = { ...coinData, chainID, chains: [chainID] }

    // chain is disabled
    if (!chains[network][chainID]) {
      console.log(`${chainID} used by ${coinData.token} is disabled.`)
      return
    }

    const isICS = AccAddress.validate(coinData.token)

    if (!isICS && chains[network][chainID]?.channels) {
      const channels = chains[network][chainID].channels
      Object.keys(channels).forEach((otherChainID) => {
        const channel = chains[network][otherChainID]?.channels?.[chainID]
        if (!channel) {
          // throw error only if the other chain exists
          !!chains[network][otherChainID] &&
            console.error(
              `${otherChainID} doesn't have an IBC channel configured with ${chainID}.`
            )
          return
        }

        const denom =
          chains[network][chainID].prefix === 'kujira'
            ? coinData.token?.replaceAll('/', ':')
            : coinData.token
        const ibcDenom = calculateIBCDenom(channel, denom)
        ibcDenomMapOut[network][`${otherChainID}:${ibcDenom}`] = {
          symbol: coinData.symbol,
          icon: coinData.icon,
          decimals: coinData.decimals,
          token: tokenId,
          chainID: otherChainID,
        }
      })
    } else if (isICS && chains[network][chainID]?.ics20Channels) {
      const channels = chains[network][chainID].ics20Channels
      const denom = `cw20:${coinData.token}`

      Object.entries(channels).forEach(([otherChainID, icsChannels]) => {
        const icsChannel =
          // specific ICS channel for that token
          icsChannels.find(
            ({ tokens }) => !!tokens && tokens.includes(coinData.token)
          ) ||
          // generic ICS channel for that chain
          icsChannels.find(({ tokens }) => !tokens)

        // no valid ICS channel found for this token
        if (!icsChannel) return

        const { channel, otherChannel } = icsChannel
        const ibcDenom = calculateIBCDenom(otherChannel, denom)

        ibcDenomMapOut[network][`${otherChainID}:${ibcDenom}`] = {
          symbol: coinData.symbol,
          icon: coinData.icon,
          decimals: coinData.decimals,
          token: tokenId,
          chainID: otherChainID,
          // to send it back on the original chain
          icsChannel: channel,
        }
      })
    }
  })

  // convert cw20 contracts to json
  const cw20ContractsOutPath = './build/cw20_contracts.json'
  const cw20ContractsOut = {}

  cw20Contracts.forEach((cw20Contract) => {
    const { network, chainID, ...cw20ContractsData } = cw20Contract

    if (typeof cw20ContractsOut[network] === 'undefined') {
      cw20ContractsOut[network] = {}
    }

    const cw20ContractsId = [chainID, cw20ContractsData.contract].join(':')

    cw20ContractsOut[network][cw20ContractsData.contract] = {
      ...cw20ContractsData,
      chainID,
      chains: [chainID],
    }

    // chain is disabled
    if (!chains[network][chainID]) {
      console.log(
        `${chainID} used by ${cw20ContractsData.contract} is disabled.`
      )
      return
    }
  })

  // convert dex pairs to json
  const dexPairsOutPath = './build/dex_pairs.json'
  const dexPairsOut = {}

  dexPairs.forEach((dexPair) => {
    const { network, chainID, ...dexPairsData } = dexPair

    if (typeof dexPairsOut[network] === 'undefined') {
      dexPairsOut[network] = {}
    }

    const dexPairId = [chainID, dexPairsData.token].join(':')

    dexPairsOut[network][dexPairsData.token] = {
      ...dexPairsData,
      chainID,
      chains: [chainID],
    }

    // chain is disabled
    if (!chains[network][chainID]) {
      console.log(`${chainID} used by ${dexPairsData.token} is disabled.`)
      return
    }
  })

  // convert nft contracts to json
  const nftContractsOutPath = './build/nft_contracts.json'
  const nftContractsOut = {}

  nftContracts.forEach((nftContract) => {
    const { network, chainID, ...nftContractsData } = nftContract

    if (typeof nftContractsOut[network] === 'undefined') {
      nftContractsOut[network] = {}
    }

    const nftContractId = [chainID, nftContractsData.contract].join(':')

    nftContractsOut[network][nftContractsData.contract] = {
      ...nftContractsData,
      chainID,
      chains: [chainID],
    }

    // chain is disabled
    if (!chains[network][chainID]) {
      console.log(
        `${chainID} used by ${nftContractsData.contract} is disabled.`
      )
      return
    }
  })

  // Format the JSON with indentions before writing.
  const jsonList = JSON.stringify(chains)
  await fs.writeFile(chainsOutPath, jsonList)
  const jsonList2 = JSON.stringify(chains2)
  await fs.writeFile(chains2OutPath, jsonList2)
  const coinsList = JSON.stringify(coinsOut)
  await fs.writeFile(coinsOutPath, coinsList)
  const ibcList = JSON.stringify(
    Object.fromEntries(
      Object.keys(ibcDenomMapOut).map((networkName) => [
        networkName,
        Object.fromEntries(
          Object.entries(ibcDenomMapOut[networkName]).map(([k, v]) => [
            k.split(':')[1],
            v,
          ])
        ),
      ])
    )
  )
  await fs.writeFile(ibcDenomMapOutPath, ibcList)
  const ibcListV2 = JSON.stringify(ibcDenomMapOut)
  await fs.writeFile(ibcDenomMapOutPathV2, ibcListV2)
  const currenciesList = require('./currencies.js')
  await fs.writeFile('./build/currencies.json', JSON.stringify(currenciesList))
  const cw20ContractsList = JSON.stringify(cw20ContractsOut)
  await fs.writeFile(cw20ContractsOutPath, cw20ContractsList)
  const dexPairsList = JSON.stringify(dexPairsOut)
  await fs.writeFile(dexPairsOutPath, dexPairsList)
  const nftContractsList = JSON.stringify(nftContractsOut)
  await fs.writeFile(nftContractsOutPath, nftContractsList)
  const nftMarketplaces = require('./cw721/marketplaces.js')
  await fs.writeFile(
    './build/nft_marketplaces.json',
    JSON.stringify(nftMarketplaces)
  )

  // copy images inside ./build
  const images = [
    ...(await glob('./img/*/*.{png,svg,webp}')),
    ...(await glob('./img/*.{png,svg,webp}')),
  ]

  await Promise.all(
    images.map(async (file) => {
      await fs.mkdir(`./build/${path.dirname(file).replace('./', '')}`, {
        recursive: true,
      })
      await fs.copyFile(file, `./build/${file.replace('./', '')}`)
    })
  )
})()

function calculateIBCDenom(channel, denom) {
  return (
    'ibc/' +
    Buffer.from(Hash.sha256(Buffer.from(`transfer/${channel}/${denom}`)))
      .toString('hex')
      .toUpperCase()
  )
}

function isValidUrl(url) {
  try {
    return new URL(url).protocol === 'https:'
  } catch (e) {
    return false
  }
}

const getSDKVersion = async (lcd) => {
  if (lcd.includes('localhost')) return 0.46

  try {
    const response = await axios.get(`${lcd}/node_info`)
    if (response.status === 200) {
      let version = response.data.application_version.cosmos_sdk_version
      version = version.substring(1) // remove the 'v'
      version = version.split('.').slice(0, 2).join('.') // keep only the first two parts
      return parseFloat(version)
    }
  } catch (error) {
    console.error(
      `Failed to get the SDK version from ${lcd} using /node_info, error: ${error.message}`
    )
    // Attempt the second request if the first fails
    try {
      const response = await axios.get(
        `${lcd}/cosmos/base/tendermint/v1beta1/node_info`
      )
      if (response.status === 200) {
        let version = response.data.application_version.cosmos_sdk_version
        version = version.substring(1) // remove the 'v'
        version = version.split('.').slice(0, 2).join('.') // keep only the first two parts
        return parseFloat(version)
      }
    } catch (error) {
      console.error(
        `Failed to get the SDK version from ${lcd} using /cosmos/base/tendermint/v1beta1/node_info, error: ${error.message}`
      )
      // Attempt the third request if the first fails
      try {
        const response = await axios.get(
          `${lcd}/cosmos/gov/v1/proposals?pagination.limit=1`
        )
        if (response.status === 200) {
          return 0.46 // if supports v1 proposals then at least 0.46
        }
      } catch (error) {
        console.error(
          `Failed to get the SDK version from ${lcd} using /cosmos/gov/v1/proposals, error: ${error.message}`
        )
        return 0.45 // version unknown
      }
    }
  }
}
