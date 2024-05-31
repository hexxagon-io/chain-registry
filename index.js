const glob = require('glob-promise')
const path = require('path')
const axios = require('axios')
const {Buffer} = require('buffer')
const {Hash} = require('@keplr-wallet/crypto')
const {AccAddress} = require('@hexxagon/feather.js')
const fs = require('fs').promises

;(async () => {
    // create build directory
    fs.mkdir('./build', {recursive: true})

    // convert chains to json
    const chains = {}
    const chainsOutPath = './build/chains.json'

    const chainFiles = await glob('./chains/*/*.js')
    const tokens = []
    const cw20Contracts = []
    const dexPairs = []
    const nftContracts = []

    await Promise.all(
        chainFiles.map(async (file) => {
            const [_, folder, network, fileName] = file.split('/')

            if (typeof chains[network] === 'undefined') {
                chains[network] = {}
            }

            const fullPath = `./${file}`
            const chainData = require(fullPath)

            if (network !== 'localterra' && !isValidUrl(chainData.lcd)) {
                console.log(`${chainData.chainID}: Invalid LCD URL: ${chainData.lcd}`)
                return
            }

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

            nftContracts.push(
                ...(chainData.nftContracts ?? []).map((t) => ({
                    ...t,
                    chainID: chainData.chainID,
                    network,
                }))
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
                                    const {data} = await axios.get(value.url, {
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

            chains[network][chainData.chainID] = {...chainData, gasPrices}
        })
    )

    // convert coins to json
    const coinsOutPath = './build/denoms.json'
    const coinsOut = {}
    const ibcDenomMapOutPath = './build/ibc.json'
    const ibcDenomMapOutPathV2 = './build/ibc_tokens.json'
    const ibcDenomMapOut = {}

    tokens.forEach((token) => {
        const {network, chainID, ...coinData} = token

        if (typeof coinsOut[network] === 'undefined') {
            coinsOut[network] = {}
        }
        if (typeof ibcDenomMapOut[network] === 'undefined') {
            ibcDenomMapOut[network] = {}
        }

        const tokenId = [chainID, coinData.token].join(':')

        coinsOut[network][tokenId] = {...coinData, chainID, chains: [chainID]}

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
                        ({tokens}) => !!tokens && tokens.includes(coinData.token)
                    ) ||
                    // generic ICS channel for that chain
                    icsChannels.find(({tokens}) => !tokens)

                // no valid ICS channel found for this token
                if (!icsChannel) return

                const {channel, otherChannel} = icsChannel
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
        const {network, chainID, ...cw20ContractsData} = cw20Contract

        if (typeof cw20ContractsOut[network] === 'undefined') {
            cw20ContractsOut[network] = {}
        }

        const cw20ContractsId = [chainID, cw20ContractsData.contract].join(':')

        cw20ContractsOut[network][cw20ContractsData.contract] = {...cw20ContractsData, chainID, chains: [chainID]}

        // chain is disabled
        if (!chains[network][chainID]) {
            console.log(`${chainID} used by ${cw20ContractsData.contract} is disabled.`)
            return
        }
    })

    // convert dex pairs to json
    const dexPairsOutPath = './build/dex_pairs.json'
    const dexPairsOut = {}

    dexPairs.forEach((dexPair) => {
        const {network, chainID, ...dexPairsData} = dexPair

        if (typeof dexPairsOut[network] === 'undefined') {
            dexPairsOut[network] = {}
        }

        const dexPairId = [chainID, dexPairsData.token].join(':')

        dexPairsOut[network][dexPairsData.token] = {...dexPairsData, chainID, chains: [chainID]}

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
        const {network, chainID, ...nftContractsData} = nftContract

        if (typeof nftContractsOut[network] === 'undefined') {
            nftContractsOut[network] = {}
        }

        const nftContractId = [chainID, nftContractsData.contract].join(':')

        nftContractsOut[network][nftContractsData.contract] = {...nftContractsData, chainID, chains: [chainID]}

        // chain is disabled
        if (!chains[network][chainID]) {
            console.log(`${chainID} used by ${nftContractsData.contract} is disabled.`)
            return
        }
    })

    // Format the JSON with indentions before writing.
    const jsonList = JSON.stringify(chains)
    await fs.writeFile(chainsOutPath, jsonList)
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
    if (lcd.includes('localhost'))
        return 0.46

    try {
        const response = await axios.get(`${lcd}/node_info`);
        if (response.status === 200) {
            let version = response.data.application_version.cosmos_sdk_version;
            version = version.substring(1); // remove the 'v'
            version = version.split('.').slice(0, 2).join('.'); // keep only the first two parts
            return parseFloat(version);
        }
    } catch (error) {
        console.error(`Failed to get the SDK version from ${lcd} using /node_info, error: ${error.message}`);
        // Attempt the second request if the first fails
        try {
            const response = await axios.get(`${lcd}/cosmos/base/tendermint/v1beta1/node_info`);
            if (response.status === 200) {
                let version = response.data.application_version.cosmos_sdk_version;
                version = version.substring(1); // remove the 'v'
                version = version.split('.').slice(0, 2).join('.'); // keep only the first two parts
                return parseFloat(version);
            }
        } catch (error) {
            console.error(`Failed to get the SDK version from ${lcd} using /cosmos/base/tendermint/v1beta1/node_info, error: ${error.message}`);
            // Attempt the third request if the first fails
            try {
                const response = await axios.get(`${lcd}/cosmos/gov/v1/proposals?pagination.limit=1`);
                if (response.status === 200) {
                    return 0.46; // if supports v1 proposals then at least 0.46
                }
            } catch (error) {
                console.error(`Failed to get the SDK version from ${lcd} using /cosmos/gov/v1/proposals, error: ${error.message}`);
                return 0.45; // version unknown
            }
        }
    }
}
