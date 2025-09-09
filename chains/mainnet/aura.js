module.exports = {
  "chainID": "aura_6322-2",
  "lcd": "https://lcd.aura.network/",
  "rpc": "https://rpc.aura.network/",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uaura": 0.002
  },
  "prefix": "aura",
  "coinType": "118",
  "baseAsset": "uaura",
  "name": "Aura Network",
  "chainRegistryName": "aura",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/aura.svg',
  "gitRepo": "https://github.com/aura-nw/aura",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/aura/accounts/{}",
    "tx": "https://explorer.chainroot.io/aura/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "uaura",
      "symbol": "AURA",
      "name": "Aura",
      "icon": process.env.CF_PAGES_URL + '/img/coins/AURA.svg',
      "decimals": 6,
      "coinGeckoID": "aura-network"
    }
  ]
};