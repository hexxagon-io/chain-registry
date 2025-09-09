module.exports = {
  "chainID": "althea_258432-1",
  "lcd": "https://nodes.chandrastation.com/api/althea/",
  "rpc": "https://nodes.chandrastation.com/rpc/althea/",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "aalthea": 100000000000
  },
  "prefix": "althea",
  "coinType": "118",
  "baseAsset": "aalthea",
  "name": "Althea",
  "chainRegistryName": "althea",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/althea.png',
  "gitRepo": "https://github.com/AltheaFoundation/althea-L1",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/althea/accounts/{}",
    "tx": "https://explorer.chainroot.io/althea/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "aalthea",
      "symbol": "ALTHEA",
      "name": "Althea Token",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ALTHEA.png',
      "decimals": 18,
      "coinGeckoID": ""
    }
  ]
};