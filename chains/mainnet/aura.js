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
    "address": "https://finder.hexxagon.io/aura_6322-2/address/{}",
    "tx": "https://finder.hexxagon.io/aura_6322-2/tx/{}",
    "validator": "https://finder.hexxagon.io/aura_6322-2/validator/{}",
    "block": "https://finder.hexxagon.io/aura_6322-2/block/{}",
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