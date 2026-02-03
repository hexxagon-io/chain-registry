module.exports = {
  "chainID": "andromeda-1",
  "lcd": "https://andro.api.m.stavr.tech",
  "rpc": "https://andro.rpc.m.stavr.tech",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uandr": 0.05
  },
  "prefix": "andr",
  "coinType": "118",
  "baseAsset": "uandr",
  "name": "Andromeda",
  "chainRegistryName": "andromeda",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/andromeda.png',
  "gitRepo": "https://github.com/andromedaprotocol/andromedad",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/andromeda-1/address/{}",
    "tx": "https://finder.hexxagon.io/andromeda-1/tx/{}",
    "validator": "https://finder.hexxagon.io/andromeda-1/validator/{}",
    "block": "https://finder.hexxagon.io/andromeda-1/block/{}",
  },
  "tokens": [
    {
      "token": "uandr",
      "symbol": "ANDR",
      "name": "Andr",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ANDR.png',
      "decimals": 6,
      "coinGeckoID": "andromeda-2"
    }
  ]
};