module.exports = {
  "chainID": "allora-mainnet-1",
  "lcd": "https://allora-api.mainnet.allora.network",
  "rpc": "https://allora-rpc.mainnet.allora.network",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uallo": 10
  },
  "prefix": "allo",
  "coinType": "118",
  "baseAsset": "uallo",
  "name": "Allora",
  "chainRegistryName": "allora",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/allora.svg',
  "gitRepo": "https://github.com/allora-network/allora-chain",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.allora.network/profile/{}",
    "tx": "https://explorer.allora.network/explorer/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "uallo",
      "symbol": "ALLO",
      "name": "Allora Network",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ALLO.svg',
      "decimals": 18,
      "coinGeckoID": ""
    }
  ]
};