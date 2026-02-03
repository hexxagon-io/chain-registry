module.exports = {
  "chainID": "meme-1",
  "lcd": "https://api-meme-1.meme.sx",
  "rpc": "https://rpc-meme-1.meme.sx",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "umeme": 0.035
  },
  "prefix": "meme",
  "coinType": "118",
  "baseAsset": "umeme",
  "name": "MEME",
  "chainRegistryName": "meme",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/meme.svg',
  "gitRepo": "https://github.com/memecosmos/meme/",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/meme-1/address/{}",
    "tx": "https://finder.hexxagon.io/meme-1/tx/{}",
    "validator": "https://finder.hexxagon.io/meme-1/validator/{}",
    "block": "https://finder.hexxagon.io/meme-1/block/{}",
  },
  "tokens": [
    {
      "token": "umeme",
      "symbol": "MEME",
      "name": "MEME",
      "icon": process.env.CF_PAGES_URL + '/img/coins/MEME.svg',
      "decimals": 6,
      "coinGeckoID": "meme-network"
    }
  ]
};