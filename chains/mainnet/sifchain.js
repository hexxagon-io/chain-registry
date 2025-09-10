module.exports = {
  "chainID": "sifchain-1",
  "lcd": "https://api-sifchain-ia.cosmosia.notional.ventures/",
  "rpc": "https://sifchain-rpc.polkachu.com",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "rowan": 1500000000000
  },
  "prefix": "sif",
  "coinType": "118",
  "baseAsset": "rowan",
  "name": "Sifchain",
  "chainRegistryName": "sifchain",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/sifchain.svg',
  "gitRepo": "https://github.com/Sifchain/sifnode.git",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/sifchain/accounts/{}",
    "tx": "https://explorer.chainroot.io/sifchain/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "rowan",
      "symbol": "ROWAN",
      "name": "Sifchain",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ROWAN.svg',
      "decimals": 18,
      "coinGeckoID": "sifchain"
    }
  ]
};