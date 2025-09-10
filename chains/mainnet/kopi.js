module.exports = {
  "chainID": "luwak-1",
  "lcd": "https://rest.kopi.money",
  "rpc": "https://rpc.kopi.money",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ukopi": 0.025
  },
  "prefix": "kopi",
  "coinType": "118",
  "baseAsset": "ukopi",
  "name": "Kopi",
  "chainRegistryName": "kopi",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/kopi.svg',
  "gitRepo": "https://github.com/kopi-money/kopi",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.kopi.money/luwak-1/account/{}",
    "tx": "https://explorer.kopi.money/luwak-1/tx/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "ukopi",
      "symbol": "XKP",
      "name": "XKP",
      "icon": process.env.CF_PAGES_URL + '/img/coins/XKP.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ukusd",
      "symbol": "kUSD",
      "name": "kUSD",
      "icon": process.env.CF_PAGES_URL + '/img/coins/kUSD.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uckusd",
      "symbol": "CKUSD",
      "name": "ckUSD",
      "icon": process.env.CF_PAGES_URL + '/img/coins/CKUSD.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ucusdc",
      "symbol": "CUSDC",
      "name": "cUSDC",
      "icon": process.env.CF_PAGES_URL + '/img/coins/CUSDC.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ucusdtinj",
      "symbol": "cUSDT.inj",
      "name": "cUSDT.inj",
      "icon": process.env.CF_PAGES_URL + '/img/coins/cUSDT.inj.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
      "symbol": "USDC",
      "name": "USDC",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.svg',
      "decimals": 6,
      "coinGeckoID": "usd-coin"
    },
    {
      "token": "ibc/D8A36AE90F20FE4843A8D249B1BCF0CCDDE35C4B605C8DED57BED20C639162D0",
      "symbol": "USDT.inj",
      "name": "USDT.inj",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDT.inj.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255",
      "symbol": "INJ",
      "name": "Injective",
      "icon": process.env.CF_PAGES_URL + '/img/coins/INJ.svg',
      "decimals": 18,
      "coinGeckoID": "injective-protocol"
    },
    {
      "token": "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
      "symbol": "LUNA",
      "name": "Luna",
      "icon": process.env.CF_PAGES_URL + '/img/coins/LUNA.svg',
      "decimals": 6,
      "coinGeckoID": "terra-luna-2"
    },
    {
      "token": "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
      "symbol": "OSMO",
      "name": "OSMO",
      "icon": process.env.CF_PAGES_URL + '/img/coins/OSMO.svg',
      "decimals": 6,
      "coinGeckoID": "osmosis"
    },
    {
      "token": "ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78",
      "symbol": "ATOM",
      "name": "ATOM",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ATOM.svg',
      "decimals": 6,
      "coinGeckoID": "cosmos"
    },
    {
      "token": "uasusdtinj",
      "symbol": "asUSDT.inj",
      "name": "asUSDT.inj",
      "icon": process.env.CF_PAGES_URL + '/img/coins/asUSDT.inj.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "uasusdc",
      "symbol": "ASUSDC",
      "name": "asUSDC",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ASUSDC.svg',
      "decimals": 6,
      "coinGeckoID": ""
    }
  ]
};