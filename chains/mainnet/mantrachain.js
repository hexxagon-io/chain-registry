module.exports = {
  "chainID": "mantra-1",
  "lcd": "https://api.mantrachain.io",
  "rpc": "https://rpc.mantrachain.io",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uom": 0.01
  },
  "prefix": "mantra",
  "coinType": "118",
  "baseAsset": "uom",
  "name": "MANTRA",
  "chainRegistryName": "mantrachain",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/mantrachain.svg',
  "gitRepo": "https://github.com/MANTRA-Chain/mantrachain",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/mantra/accounts/{}",
    "tx": "https://explorer.chainroot.io/mantra/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "uom",
      "symbol": "OM",
      "name": "MANTRA Chain",
      "icon": process.env.CF_PAGES_URL + '/img/coins/OM.png',
      "decimals": 6,
      "coinGeckoID": "mantra-dao"
    },
    {
      "token": "ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3",
      "symbol": "USDC",
      "name": "USDC",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.svg',
      "decimals": 6,
      "coinGeckoID": "usd-coin"
    },
    {
      "token": "ibc/6749D16BC09F419C090C330FC751FFF1C96143DB7A4D2FCAEC2F348A3E17618A",
      "symbol": "USDY",
      "name": "Ondo US Dollar Yield",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDY.svg',
      "decimals": 18,
      "coinGeckoID": "ondo-us-dollar-yield"
    },
    {
      "token": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      "symbol": "OSMO",
      "name": "Osmosis",
      "icon": process.env.CF_PAGES_URL + '/img/coins/OSMO.svg',
      "decimals": 6,
      "coinGeckoID": "osmosis"
    },
    {
      "token": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
      "symbol": "ATOM",
      "name": "Cosmos Hub",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ATOM.svg',
      "decimals": 6,
      "coinGeckoID": "cosmos"
    },
    {
      "token": "ibc/16E817E682AD1A73FD748BC989574B2702E109C4105550498086531FA3D6B050",
      "symbol": "STARS",
      "name": "Stargaze",
      "icon": process.env.CF_PAGES_URL + '/img/coins/STARS.svg',
      "decimals": 6,
      "coinGeckoID": "stargaze"
    },
    {
      "token": "ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151",
      "symbol": "AXL",
      "name": "Axelar",
      "icon": process.env.CF_PAGES_URL + '/img/coins/AXL.svg',
      "decimals": 6,
      "coinGeckoID": "axelar"
    },
    {
      "token": "factory/mantra1vtpg8z82gz9qe3adf7t9z0qwuvkpzmqu9ds4ej/BIKE",
      "symbol": "BIKE",
      "name": "Ali-Rev-Gator",
      "icon": process.env.CF_PAGES_URL + '/img/coins/BIKE.png',
      "decimals": 6,
      "coinGeckoID": ""
    }
  ]
};