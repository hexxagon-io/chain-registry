module.exports = {
  "chainID": "hippo-protocol-1",
  "lcd": "https://api.hippo-protocol.com/",
  "rpc": "https://rpc.hippo-protocol.com/",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ahp": 5000000000000
  },
  "prefix": "hippo",
  "coinType": "118",
  "baseAsset": "ahp",
  "name": "Hippo Protocol",
  "chainRegistryName": "hippoprotocol",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/hippoprotocol.svg',
  "gitRepo": "https://github.com/hippo-protocol/hippo-protocol",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://river.hippoprotocol.ai/hippo-protocol/account/{}",
    "tx": "https://river.hippoprotocol.ai/hippo-protocol/tx/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "ahp",
      "symbol": "HP",
      "name": "Hippo",
      "icon": process.env.CF_PAGES_URL + '/img/coins/HP.svg',
      "decimals": 6,
      "coinGeckoID": "hippo-protocol"
    }
  ]
};