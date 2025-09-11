module.exports = {
  "chainID": "pio-mainnet-1",
  "lcd": "https://api.provenance.io",
  "rpc": "https://rpc.provenance.io",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "nhash": 2100
  },
  "prefix": "pb",
  "coinType": "505",
  "baseAsset": "nhash",
  "name": "Provenance",
  "chainRegistryName": "provenance",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/provenance.svg',
  "gitRepo": "https://github.com/provenance-io/provenance",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/provenance/accounts/{}",
    "tx": "https://explorer.chainroot.io/provenance/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "nhash",
      "symbol": "HASH",
      "name": "Hash",
      "icon": process.env.CF_PAGES_URL + '/img/coins/HASH.svg',
      "decimals": 9,
      "coinGeckoID": "hash-2"
    },
    {
      "token": "ibc/616E26A85AD20A3DDEAEBDDE7262E3BA9356C557BC15CACEA86768D7D51FA703",
      "symbol": "USDC",
      "name": "USDC",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.svg',
      "decimals": 6,
      "coinGeckoID": "usd-coin"
    }
  ]
};