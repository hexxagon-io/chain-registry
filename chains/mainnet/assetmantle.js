module.exports = {
  "chainID": "mantle-1",
  "lcd": "https://rest.assetmantle.one",
  "rpc": "https://rpc.assetmantle.one",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "umntl": 0.025
  },
  "prefix": "mantle",
  "coinType": "118",
  "baseAsset": "umntl",
  "name": "AssetMantle",
  "chainRegistryName": "assetmantle",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/assetmantle.svg',
  "gitRepo": "https://github.com/AssetMantle/node",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/mantle-1/address/{}",
    "tx": "https://finder.hexxagon.io/mantle-1/tx/{}",
    "validator": "https://finder.hexxagon.io/mantle-1/validator/{}",
    "block": "https://finder.hexxagon.io/mantle-1/block/{}",
  },
  "tokens": [
    {
      "token": "umntl",
      "symbol": "MNTL",
      "name": "AssetMantle",
      "icon": process.env.CF_PAGES_URL + '/img/coins/MNTL.svg',
      "decimals": 6,
      "coinGeckoID": "assetmantle"
    }
  ]
};