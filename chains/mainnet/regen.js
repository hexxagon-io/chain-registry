module.exports = {
  "chainID": "regen-1",
  "lcd": "http://public-rpc.regen.vitwit.com:1317",
  "rpc": "https://rpc-regen.ecostake.com",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uregen": 0.025
  },
  "prefix": "regen",
  "coinType": "118",
  "baseAsset": "uregen",
  "name": "Regen",
  "chainRegistryName": "regen",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/regen.svg',
  "gitRepo": "https://github.com/regen-network/regen-ledger",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/regen/accounts/{}",
    "tx": "https://explorer.chainroot.io/regen/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "uregen",
      "symbol": "REGEN",
      "name": "Regen Network",
      "icon": process.env.CF_PAGES_URL + '/img/coins/REGEN.svg',
      "decimals": 6,
      "coinGeckoID": "regen"
    },
    {
      "token": "eco.uC.NCT",
      "symbol": "NCT",
      "name": "Nature Carbon Ton",
      "icon": process.env.CF_PAGES_URL + '/img/coins/NCT.svg',
      "decimals": 6,
      "coinGeckoID": "toucan-protocol-nature-carbon-tonne"
    }
  ]
};