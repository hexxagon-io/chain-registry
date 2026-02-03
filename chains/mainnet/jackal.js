module.exports = {
  "chainID": "jackal-1",
  "lcd": "https://api.jackalprotocol.com",
  "rpc": "https://rpc.jackalprotocol.com",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ujkl": 0.002
  },
  "prefix": "jkl",
  "coinType": "118",
  "baseAsset": "ujkl",
  "name": "Jackal",
  "chainRegistryName": "jackal",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/jackal.svg',
  "gitRepo": "https://github.com/JackalLabs/canine-chain",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/jackal-1/address/{}",
    "tx": "https://finder.hexxagon.io/jackal-1/tx/{}",
    "validator": "https://finder.hexxagon.io/jackal-1/validator/{}",
    "block": "https://finder.hexxagon.io/jackal-1/block/{}",
  },
  "tokens": [
    {
      "token": "ujkl",
      "symbol": "JKL",
      "name": "Jackal",
      "icon": process.env.CF_PAGES_URL + '/img/coins/JKL.svg',
      "decimals": 6,
      "coinGeckoID": "jackal-protocol"
    }
  ]
};