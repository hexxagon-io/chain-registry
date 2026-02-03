module.exports = {
  "chainID": "sunrise-1",
  "lcd": "https://a.consensus.sunrise-1.sunriselayer.io:1318",
  "rpc": "https://a.consensus.sunrise-1.sunriselayer.io",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uusdrise": 0.02
  },
  "prefix": "sunrise",
  "coinType": "118",
  "baseAsset": "uusdrise",
  "name": "Sunrise",
  "chainRegistryName": "sunrise",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/sunrise.svg',
  "gitRepo": "https://github.com/sunriselayer/sunrise",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/sunrise-1/address/{}",
    "tx": "https://finder.hexxagon.io/sunrise-1/tx/{}",
    "validator": "https://finder.hexxagon.io/sunrise-1/validator/{}",
    "block": "https://finder.hexxagon.io/sunrise-1/block/{}",
  },
  "tokens": [
    {
      "token": "uvrise",
      "symbol": "vRISE",
      "name": "Sunrise vRISE",
      "icon": process.env.CF_PAGES_URL + '/img/coins/vRISE.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "urise",
      "symbol": "RISE",
      "name": "Sunrise RISE",
      "icon": process.env.CF_PAGES_URL + '/img/coins/RISE.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uusdrise",
      "symbol": "USDRISE",
      "name": "Sunrise USDrise",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDRISE.svg',
      "decimals": 6,
      "coinGeckoID": ""
    }
  ]
};