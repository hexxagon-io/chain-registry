module.exports = {
  "chainID": "passage-2",
  "lcd": "https://api.passage.vitwit.com",
  "rpc": "https://rpc.passage.vitwit.com",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "upasg": 12.5
  },
  "prefix": "pasg",
  "coinType": "118",
  "baseAsset": "upasg",
  "name": "Passage",
  "chainRegistryName": "passage",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/passage.png',
  "gitRepo": "https://github.com/envadiv/Passage3D",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/passage/accounts/{}",
    "tx": "https://explorer.chainroot.io/passage/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "upasg",
      "symbol": "PASG",
      "name": "Passage",
      "icon": process.env.CF_PAGES_URL + '/img/coins/PASG.png',
      "decimals": 6,
      "coinGeckoID": "passage"
    }
  ]
};