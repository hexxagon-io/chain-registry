module.exports = {
  "chainID": "dhealth",
  "lcd": "https://lcd.dhealth.com",
  "rpc": "https://rpc.dhealth.com",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "udhp": 0.03
  },
  "prefix": "dh",
  "coinType": "10111",
  "baseAsset": "udhp",
  "name": "dHealth",
  "chainRegistryName": "dhealth",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/dhealth.svg',
  "gitRepo": "https://github.com/dhealthproject/dhealth",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/dhealth/accounts/{}",
    "tx": "https://explorer.chainroot.io/dhealth/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "udhp",
      "symbol": "DHP",
      "name": "Digital Health Point",
      "icon": process.env.CF_PAGES_URL + '/img/coins/DHP.svg',
      "decimals": 6,
      "coinGeckoID": "dhealth"
    }
  ]
};