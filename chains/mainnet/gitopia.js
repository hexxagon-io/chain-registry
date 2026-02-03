module.exports = {
  "chainID": "gitopia",
  "lcd": "https://gitopia-api.polkachu.com:443",
  "rpc": "https://gitopia-rpc.polkachu.com:443",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ulore": 0.0016
  },
  "prefix": "gitopia",
  "coinType": "118",
  "baseAsset": "ulore",
  "name": "Gitopia",
  "chainRegistryName": "gitopia",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/gitopia.png',
  "gitRepo": "https://github.com/gitopia/gitopia",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/gitopia/address/{}",
    "tx": "https://finder.hexxagon.io/gitopia/tx/{}",
    "validator": "https://finder.hexxagon.io/gitopia/validator/{}",
    "block": "https://finder.hexxagon.io/gitopia/block/{}",
  },
  "tokens": [
    {
      "token": "ulore",
      "symbol": "LORE",
      "name": "LORE",
      "icon": process.env.CF_PAGES_URL + '/img/coins/LORE.svg',
      "decimals": 6,
      "coinGeckoID": "gitopia"
    }
  ]
};