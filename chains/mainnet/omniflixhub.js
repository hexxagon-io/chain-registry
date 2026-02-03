module.exports = {
  "chainID": "omniflixhub-1",
  "lcd": "https://api.omniflix.nodestake.org",
  "rpc": "https://rpc.omniflix.nodestake.org",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uflix": 0.015
  },
  "prefix": "omniflix",
  "coinType": "118",
  "baseAsset": "uflix",
  "name": "OmniFlix",
  "chainRegistryName": "omniflixhub",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/omniflixhub.svg',
  "gitRepo": "https://github.com/OmniFlix/omniflixhub",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/omniflixhub-1/address/{}",
    "tx": "https://finder.hexxagon.io/omniflixhub-1/tx/{}",
    "validator": "https://finder.hexxagon.io/omniflixhub-1/validator/{}",
    "block": "https://finder.hexxagon.io/omniflixhub-1/block/{}",
  },
  "tokens": [
    {
      "token": "uflix",
      "symbol": "FLIX",
      "name": "Flix",
      "icon": process.env.CF_PAGES_URL + '/img/coins/FLIX.svg',
      "decimals": 6,
      "coinGeckoID": "omniflix-network"
    },
    {
      "token": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
      "symbol": "ATOM",
      "name": "Cosmos Hub Atom",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ATOM.svg',
      "decimals": 6,
      "coinGeckoID": "cosmos"
    },
    {
      "token": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      "symbol": "OSMO",
      "name": "Osmosis osmo",
      "icon": process.env.CF_PAGES_URL + '/img/coins/OSMO.svg',
      "decimals": 6,
      "coinGeckoID": "osmosis"
    },
    {
      "token": "ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274",
      "symbol": "IST",
      "name": "Agoric IST (Inter Stable Token)",
      "icon": process.env.CF_PAGES_URL + '/img/coins/IST.svg',
      "decimals": 6,
      "coinGeckoID": "inter-stable-token"
    },
    {
      "token": "ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9",
      "symbol": "USDC.axl",
      "name": "USD Coin (Axelar)",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.axl.svg',
      "decimals": 6,
      "coinGeckoID": "axlusdc"
    },
    {
      "token": "ibc/6901B45BC2C5418ED8B3C3C9F9A641A3DAF2D234230AFA9DF32D8F9F9434721C",
      "symbol": "AKT",
      "name": "Akash",
      "icon": process.env.CF_PAGES_URL + '/img/coins/AKT.svg',
      "decimals": 6,
      "coinGeckoID": "akash-network"
    },
    {
      "token": "ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630",
      "symbol": "BADDOG.osmo",
      "name": "BadDog (Osmosis)",
      "icon": process.env.CF_PAGES_URL + '/img/coins/BADDOG.osmo.png',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata",
      "symbol": "YGATA",
      "name": "Yield GATA",
      "icon": process.env.CF_PAGES_URL + '/img/coins/YGATA.svg',
      "decimals": 6,
      "coinGeckoID": "yield-gata"
    },
    {
      "token": "ibc/1F8E19CD32FC6B2DBA825E7C3B370004BF5041BAB1099FC1BEBD6054FD5E8D08",
      "symbol": "CCD",
      "name": "Coreum Community DAO Token",
      "icon": process.env.CF_PAGES_URL + '/img/coins/CCD.svg',
      "decimals": 6,
      "coinGeckoID": ""
    }
  ]
};