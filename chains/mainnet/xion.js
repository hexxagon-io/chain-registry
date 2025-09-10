module.exports = {
  "chainID": "xion-mainnet-1",
  "lcd": "https://api.xion-mainnet-1.burnt.com",
  "rpc": "https://rpc.xion-mainnet-1.burnt.com:443",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uxion": 0.001
  },
  "prefix": "xion",
  "coinType": "118",
  "baseAsset": "uxion",
  "name": "Xion",
  "chainRegistryName": "xion",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/xion.png',
  "gitRepo": "https://github.com/burnt-labs/xion",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/xion/accounts/{}",
    "tx": "https://explorer.chainroot.io/xion/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "uxion",
      "symbol": "XION",
      "name": "xion",
      "icon": process.env.CF_PAGES_URL + '/img/coins/XION.png',
      "decimals": 6,
      "coinGeckoID": "xion-2"
    },
    {
      "token": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      "symbol": "OSMO",
      "name": "OSMO",
      "icon": process.env.CF_PAGES_URL + '/img/coins/OSMO.svg',
      "decimals": 6,
      "coinGeckoID": "osmosis"
    },
    {
      "token": "ibc/056EA54C3D9B49B3C0418955A27980A91DD4F210914BFE240A1DB19E27895ECA",
      "symbol": "KYVE",
      "name": "KYVE",
      "icon": process.env.CF_PAGES_URL + '/img/coins/KYVE.svg',
      "decimals": 6,
      "coinGeckoID": "kyve-network"
    },
    {
      "token": "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      "symbol": "AXLUSDC",
      "name": "Axelar Bridged USDC",
      "icon": process.env.CF_PAGES_URL + '/img/coins/AXLUSDC.svg',
      "decimals": 6,
      "coinGeckoID": "axlusdc"
    },
    {
      "token": "ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3",
      "symbol": "AXL",
      "name": "Axelar",
      "icon": process.env.CF_PAGES_URL + '/img/coins/AXL.svg',
      "decimals": 6,
      "coinGeckoID": "axelar"
    },
    {
      "token": "ibc/AAD7136DD626569C3DDE7C5F764968BB2E939875EFC568AE5712B62081850814",
      "symbol": "axlWETH",
      "name": "Axelar Wrapped Ether",
      "icon": process.env.CF_PAGES_URL + '/img/coins/axlWETH.png',
      "decimals": 18,
      "coinGeckoID": "axlweth"
    },
    {
      "token": "ibc/DBE9697AC1044255A305A2034AD360B4152632BFBFB5785234731F60196B9645",
      "symbol": "ELYS",
      "name": "Elys Network",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ELYS.png',
      "decimals": 6,
      "coinGeckoID": "elys-network"
    },
    {
      "token": "ibc/E706A0C6CACB374ADC2BCF6A74FE1B260840FC822E45DCB776DEA962A57FED30",
      "symbol": "axlARB",
      "name": "Arbitrum",
      "icon": process.env.CF_PAGES_URL + '/img/coins/axlARB.svg',
      "decimals": 18,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      "symbol": "USDC",
      "name": "Noble USDC Token",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.svg',
      "decimals": 6,
      "coinGeckoID": "usd-coin"
    }
  ]
};