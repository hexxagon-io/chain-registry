module.exports = {
  "chainID": "lumera-mainnet-1",
  "lcd": "https://lcd.lumera.io:443",
  "rpc": "https://rpc.lumera.io:443",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ulume": 0.025
  },
  "prefix": "lumera",
  "coinType": "118",
  "baseAsset": "ulume",
  "name": "Lumera",
  "chainRegistryName": "lumera",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/lumera.png',
  "gitRepo": "https://github.com/LumeraProtocol/lumera",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/lumera-mainnet-1/address/{}",
    "tx": "https://finder.hexxagon.io/lumera-mainnet-1/tx/{}",
    "validator": "https://finder.hexxagon.io/lumera-mainnet-1/validator/{}",
    "block": "https://finder.hexxagon.io/lumera-mainnet-1/block/{}",
  },
  "tokens": [
    {
      "token": "ulume",
      "symbol": "LUME",
      "name": "lume",
      "icon": process.env.CF_PAGES_URL + '/img/coins/LUME.png',
      "decimals": 6,
      "coinGeckoID": ""
    }
  ]
};