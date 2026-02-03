module.exports = {
  "chainID": "source-1",
  "lcd": "https://api.source.nodestake.org",
  "rpc": "https://rpc.source.nodestake.org",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "usource": 0.075
  },
  "prefix": "source",
  "coinType": "118",
  "baseAsset": "usource",
  "name": "Source",
  "chainRegistryName": "source",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/source.svg',
  "gitRepo": "https://github.com/Source-Protocol-Cosmos/source",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/source-1/address/{}",
    "tx": "https://finder.hexxagon.io/source-1/tx/{}",
    "validator": "https://finder.hexxagon.io/source-1/validator/{}",
    "block": "https://finder.hexxagon.io/source-1/block/{}",
  },
  "tokens": [
    {
      "token": "usource",
      "symbol": "SOURCE",
      "name": "Source",
      "icon": process.env.CF_PAGES_URL + '/img/coins/SOURCE.svg',
      "decimals": 6,
      "coinGeckoID": "source"
    },
    {
      "token": "ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A",
      "symbol": "SRCX",
      "name": "SRCX",
      "icon": process.env.CF_PAGES_URL + '/img/coins/SRCX.png',
      "decimals": 9,
      "coinGeckoID": ""
    }
  ]
};