module.exports = {
  "chainID": "quicksilver-2",
  "lcd": "https://lcd.quicksilver.zone:443",
  "rpc": "https://rpc.quicksilver.zone:443",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uqck": 0.0001
  },
  "prefix": "quick",
  "coinType": "118",
  "baseAsset": "uqck",
  "name": "Quicksilver",
  "chainRegistryName": "quicksilver",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/quicksilver.svg',
  "gitRepo": "https://github.com/quicksilver-zone/quicksilver",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://finder.hexxagon.io/quicksilver-2/address/{}",
    "tx": "https://finder.hexxagon.io/quicksilver-2/tx/{}",
    "validator": "https://finder.hexxagon.io/quicksilver-2/validator/{}",
    "block": "https://finder.hexxagon.io/quicksilver-2/block/{}",
  },
  "tokens": [
    {
      "token": "uqck",
      "symbol": "QCK",
      "name": "Quicksilver",
      "icon": process.env.CF_PAGES_URL + '/img/coins/QCK.png',
      "decimals": 6,
      "coinGeckoID": "quicksilver"
    },
    {
      "token": "uqstars",
      "symbol": "qSTARS",
      "name": "Quicksilver Liquid Staked STARS",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qSTARS.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uqatom",
      "symbol": "qATOM",
      "name": "Quicksilver Liquid Staked ATOM",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qATOM.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uqregen",
      "symbol": "qREGEN",
      "name": "Quicksilver Liquid Staked Regen",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qREGEN.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uqosmo",
      "symbol": "qOSMO",
      "name": "Quicksilver Liquid Staked OSMO",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qOSMO.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uqsomm",
      "symbol": "qSOMM",
      "name": "Quicksilver Liquid Staked SOMM",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qSOMM.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uqjuno",
      "symbol": "qJUNO",
      "name": "Quicksilver Liquid Staked JUNO",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qJUNO.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "aqdydx",
      "symbol": "qDYDX",
      "name": "Quicksilver Liquid Staked DYDX",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qDYDX.svg',
      "decimals": 18,
      "coinGeckoID": ""
    },
    {
      "token": "uqsaga",
      "symbol": "qSAGA",
      "name": "Quicksilver Liquid Staked SAGA",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qSAGA.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uqbld",
      "symbol": "qBLD",
      "name": "Quicksilver Liquid Staked BLD",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qBLD.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/5666A86DCC869C75F69A7938AD6DCFECAC4A09C73522599E7A85B10143E5FBD2",
      "symbol": "USDC",
      "name": "Noble USDC",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.png',
      "decimals": 6,
      "coinGeckoID": "usd-coin"
    },
    {
      "token": "aqarch",
      "symbol": "qARCH",
      "name": "Quicksilver Liquid Staked ARCH",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qARCH.svg',
      "decimals": 18,
      "coinGeckoID": ""
    },
    {
      "token": "uqtia",
      "symbol": "qTIA",
      "name": "Quicksilver Liquid Staked TIA",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qTIA.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "pqpica",
      "symbol": "qPICA",
      "name": "Quicksilver Liquid Staked PICA",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qPICA.svg',
      "decimals": 12,
      "coinGeckoID": ""
    },
    {
      "token": "qinj",
      "symbol": "qINJ",
      "name": "Quicksilver Liquid Staked INJ",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qINJ.svg',
      "decimals": 18,
      "coinGeckoID": ""
    },
    {
      "token": "uqluna",
      "symbol": "qLUNA",
      "name": "Quicksilver Liquid Staked LUNA",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qLUNA.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uqflix",
      "symbol": "qFLIX",
      "name": "Quicksilver Liquid Staked FLIX",
      "icon": process.env.CF_PAGES_URL + '/img/coins/qFLIX.svg',
      "decimals": 6,
      "coinGeckoID": ""
    }
  ]
};