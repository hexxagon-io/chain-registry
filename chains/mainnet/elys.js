module.exports = {
  "chainID": "elys-1",
  "lcd": "https://api.elys.network",
  "rpc": "https://rpc.elys.network:443",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uelys": 0.025
  },
  "prefix": "elys",
  "coinType": "118",
  "baseAsset": "uelys",
  "name": "Elys Network",
  "chainRegistryName": "elys",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/elys.png',
  "gitRepo": "https://github.com/elys-network/elys",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/elys/accounts/{}",
    "tx": "https://explorer.chainroot.io/elys/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "uelys",
      "symbol": "ELYS",
      "name": "Elys Network",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ELYS.png',
      "decimals": 6,
      "coinGeckoID": "elys-network"
    },
    {
      "token": "ueden",
      "symbol": "EDEN",
      "name": "Eden",
      "icon": process.env.CF_PAGES_URL + '/img/coins/EDEN.png',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uedenb",
      "symbol": "EDEN BOOST",
      "name": "Eden BOOST",
      "icon": process.env.CF_PAGES_URL + '/img/coins/EDEN BOOST.png',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      "symbol": "USDC",
      "name": "Noble USD Coin",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.svg',
      "decimals": 6,
      "coinGeckoID": "usd-coin"
    },
    {
      "token": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      "symbol": "ATOM",
      "name": "ATOM on Elys",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ATOM.svg',
      "decimals": 6,
      "coinGeckoID": "cosmos"
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
      "token": "ibc/799FDD409719A1122586A629AE8FCA17380351A51C1F47A80A1B8E7F2A491098",
      "symbol": "AKT",
      "name": "Akash",
      "icon": process.env.CF_PAGES_URL + '/img/coins/AKT.svg',
      "decimals": 6,
      "coinGeckoID": "akash-network"
    },
    {
      "token": "ibc/45D6B52CAD911A15BD9C2F5FFDA80E26AFCB05C7CD520070790ABC86D2B24229",
      "symbol": "TIA",
      "name": "Celestia",
      "icon": process.env.CF_PAGES_URL + '/img/coins/TIA.svg',
      "decimals": 6,
      "coinGeckoID": "celestia"
    },
    {
      "token": "ibc/6BFB09FE2464A7681645610F56BBEFF555A00B8AE146339FEB4609BF40FB0F4A",
      "symbol": "XION",
      "name": "Xion",
      "icon": process.env.CF_PAGES_URL + '/img/coins/XION.png',
      "decimals": 6,
      "coinGeckoID": "xion-2"
    },
    {
      "token": "ibc/B88C39AD6C8550716DFD64C3AD28F355633554821249AC9F8BCC21341641CD18",
      "symbol": "SAGA",
      "name": "Saga",
      "icon": process.env.CF_PAGES_URL + '/img/coins/SAGA.svg',
      "decimals": 6,
      "coinGeckoID": "saga-2"
    },
    {
      "token": "ibc/8464A63954C0350A26C8588E20719F3A0AC8705E4CA0F7450B60C3F16B2D3421",
      "symbol": "XRP",
      "name": "Ripple",
      "icon": process.env.CF_PAGES_URL + '/img/coins/XRP.svg',
      "decimals": 18,
      "coinGeckoID": "ripple"
    }
  ]
};