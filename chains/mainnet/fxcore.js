module.exports = {
  "chainID": "fxcore",
  "lcd": "https://fx-rest.functionx.io",
  "rpc": "https://fx-json.functionx.io",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "apundiai": 5100000000
  },
  "prefix": "fx",
  "coinType": "60",
  "baseAsset": "apundiai",
  "name": "Pundi AIFX",
  "chainRegistryName": "fxcore",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/fxcore.png',
  "gitRepo": "https://github.com/PundiAI/fx-core",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://starscan.io/fxcore/address/{}",
    "tx": "https://starscan.io/fxcore/tx/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "apundiai",
      "symbol": "PUNDIAI",
      "name": "Pundi AI",
      "icon": process.env.CF_PAGES_URL + '/img/coins/PUNDIAI.svg',
      "decimals": 18,
      "coinGeckoID": "pundi-aifx"
    },
    {
      "token": "FX",
      "symbol": "FX",
      "name": "Function X",
      "icon": process.env.CF_PAGES_URL + '/img/coins/FX.svg',
      "decimals": 18,
      "coinGeckoID": "fx-coin"
    },
    {
      "token": "eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
      "symbol": "PUNDIX",
      "name": "Pundi X Token",
      "icon": process.env.CF_PAGES_URL + '/img/coins/PUNDIX.png',
      "decimals": 18,
      "coinGeckoID": ""
    }
  ]
};