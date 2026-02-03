module.exports = {
  "chainID": "bitbadges-1",
  "lcd": "http://134.122.12.165:1317",
  "rpc": "http://134.122.12.165:26657",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ubadge": 0.0025
  },
  "prefix": "bb",
  "coinType": "118",
  "baseAsset": "ubadge",
  "name": "BitBadges",
  "chainRegistryName": "bitbadges",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/bitbadges.png',
  "gitRepo": "https://github.com/bitbadges/bitbadgeschain/",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/bitbadges-1/address/{}",
    "tx": "https://finder.hexxagon.io/bitbadges-1/tx/{}",
    "validator": "https://finder.hexxagon.io/bitbadges-1/validator/{}",
    "block": "https://finder.hexxagon.io/bitbadges-1/block/{}",
  },
  "tokens": [
    {
      "token": "ubadge",
      "symbol": "BADGE",
      "name": "BitBadges",
      "icon": process.env.CF_PAGES_URL + '/img/coins/BADGE.svg',
      "decimals": 9,
      "coinGeckoID": ""
    }
  ]
};