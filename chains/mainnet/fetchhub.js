module.exports = {
  "chainID": "fetchhub-4",
  "lcd": "https://rest-fetchhub.fetch.ai",
  "rpc": "https://rpc-fetchhub.fetch.ai:443",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "afet": 0.025
  },
  "prefix": "fetch",
  "coinType": "118",
  "baseAsset": "afet",
  "name": "Fetch.ai",
  "chainRegistryName": "fetchhub",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/fetchhub.svg',
  "gitRepo": "https://github.com/fetchai/fetchd",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/fetchai/accounts/{}",
    "tx": "https://explorer.chainroot.io/fetchai/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "afet",
      "symbol": "FET",
      "name": "fetch-ai",
      "icon": process.env.CF_PAGES_URL + '/img/coins/FET.svg',
      "decimals": 18,
      "coinGeckoID": "fetch-ai"
    },
    {
      "token": "nanomobx",
      "symbol": "MOBX",
      "name": "MOBIX",
      "icon": process.env.CF_PAGES_URL + '/img/coins/MOBX.svg',
      "decimals": 9,
      "coinGeckoID": ""
    }
  ]
};