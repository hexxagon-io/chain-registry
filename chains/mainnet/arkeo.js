module.exports = {
  "chainID": "arkeo-main-v1",
  "lcd": "https://rest-seed.arkeo.network",
  "rpc": "https://rpc-seed.arkeo.network",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uarkeo": 0.025
  },
  "prefix": "arkeo",
  "coinType": "118",
  "baseAsset": "uarkeo",
  "name": "Arkeo",
  "chainRegistryName": "arkeo",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/arkeo.png',
  "gitRepo": "https://github.com/arkeonetwork/arkeo",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/arkeo-main-v1/address/{}",
    "tx": "https://finder.hexxagon.io/arkeo-main-v1/tx/{}",
    "validator": "https://finder.hexxagon.io/arkeo-main-v1/validator/{}",
    "block": "https://finder.hexxagon.io/arkeo-main-v1/block/{}",
  },
  "tokens": [
    {
      "token": "uarkeo",
      "symbol": "ARKEO",
      "name": "Arkeo",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ARKEO.svg',
      "decimals": 8,
      "coinGeckoID": ""
    }
  ]
};