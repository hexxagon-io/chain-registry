module.exports = {
  "chainID": "andromeda-1",
  "lcd": "https://api.andromeda-1.andromeda.aviaone.com",
  "rpc": "https://rpc.andromeda-1.andromeda.aviaone.com",
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
    "address": "https://explorer.chainroot.io/andromeda/accounts/{}",
    "tx": "https://explorer.chainroot.io/andromeda/transactions/{}",
    "validator": "",
    "block": ""
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