module.exports = {
  "chainID": "kyve-1",
  "lcd": "https://api.kyve.network",
  "rpc": "https://rpc.kyve.network",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ukyve": 3
  },
  "prefix": "kyve",
  "coinType": "118",
  "baseAsset": "ukyve",
  "name": "KYVE",
  "chainRegistryName": "kyve",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/kyve.svg',
  "gitRepo": "https://github.com/KYVENetwork/chain",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/kyve/accounts/{}",
    "tx": "https://explorer.chainroot.io/kyve/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "ukyve",
      "symbol": "KYVE",
      "name": "KYVE",
      "icon": process.env.CF_PAGES_URL + '/img/coins/KYVE.svg',
      "decimals": 6,
      "coinGeckoID": "kyve-network"
    }
  ]
};