module.exports = {
  "chainID": "core-1",
  "lcd": "https://rest.core.persistence.one",
  "rpc": "https://rpc.core.persistence.one",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "uxprt": 0.025
  },
  "prefix": "persistence",
  "coinType": "118",
  "baseAsset": "uxprt",
  "name": "Persistence",
  "chainRegistryName": "persistence",
  "disabledModules": [
    "swap"
  ],
  "icon": process.env.CF_PAGES_URL + '/img/chains/persistence.svg',
  "gitRepo": "https://github.com/persistenceOne/persistenceCore",
  "autoCompound": {
    "enabled": true,
    "minRewards": 1000000
  },
  "explorer": {
    "address": "https://explorer.chainroot.io/persistence/accounts/{}",
    "tx": "https://explorer.chainroot.io/persistence/transactions/{}",
    "validator": "",
    "block": ""
  },
  "tokens": [
    {
      "token": "uxprt",
      "symbol": "XPRT",
      "name": "Persistence",
      "icon": process.env.CF_PAGES_URL + '/img/coins/XPRT.svg',
      "decimals": 6,
      "coinGeckoID": "persistence"
    },
    {
      "token": "stk/uatom",
      "symbol": "stkATOM",
      "name": "PSTAKE staked ATOM",
      "icon": process.env.CF_PAGES_URL + '/img/coins/stkATOM.svg',
      "decimals": 6,
      "coinGeckoID": "stkatom"
    },
    {
      "token": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
      "symbol": "PSTAKE",
      "name": "pSTAKE Finance",
      "icon": process.env.CF_PAGES_URL + '/img/coins/PSTAKE.svg',
      "decimals": 18,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA",
      "symbol": "ATOM",
      "name": "Cosmos Hub Atom",
      "icon": process.env.CF_PAGES_URL + '/img/coins/ATOM.svg',
      "decimals": 6,
      "coinGeckoID": "cosmos"
    },
    {
      "token": "ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4",
      "symbol": "USDT",
      "name": "Tether USDT",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDT.svg',
      "decimals": 6,
      "coinGeckoID": "tether"
    },
    {
      "token": "ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0",
      "symbol": "USDC",
      "name": "Noble USD Coin",
      "icon": process.env.CF_PAGES_URL + '/img/coins/USDC.svg',
      "decimals": 6,
      "coinGeckoID": "usd-coin"
    },
    {
      "token": "ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E",
      "symbol": "DYDX",
      "name": "dYdX",
      "icon": process.env.CF_PAGES_URL + '/img/coins/DYDX.svg',
      "decimals": 18,
      "coinGeckoID": "dydx-chain"
    },
    {
      "token": "stk/uosmo",
      "symbol": "stkOSMO",
      "name": "PSTAKE staked OSMO",
      "icon": process.env.CF_PAGES_URL + '/img/coins/stkOSMO.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "stk/adydx",
      "symbol": "stkDYDX",
      "name": "PSTAKE staked DYDX",
      "icon": process.env.CF_PAGES_URL + '/img/coins/stkDYDX.svg',
      "decimals": 18,
      "coinGeckoID": ""
    },
    {
      "token": "stk/ustars",
      "symbol": "stkSTARS",
      "name": "PSTAKE staked STARS",
      "icon": process.env.CF_PAGES_URL + '/img/coins/stkSTARS.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B",
      "symbol": "STARS",
      "name": "Stargaze",
      "icon": process.env.CF_PAGES_URL + '/img/coins/STARS.svg',
      "decimals": 6,
      "coinGeckoID": "stargaze"
    },
    {
      "token": "ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B",
      "symbol": "SHD",
      "name": "Shade",
      "icon": process.env.CF_PAGES_URL + '/img/coins/SHD.svg',
      "decimals": 8,
      "coinGeckoID": "shade-protocol"
    },
    {
      "token": "stk/uhuahua",
      "symbol": "stkHUAHUA",
      "name": "PSTAKE staked HUAHUA",
      "icon": process.env.CF_PAGES_URL + '/img/coins/stkHUAHUA.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4",
      "symbol": "HUAHUA",
      "name": "Chihuahua",
      "icon": process.env.CF_PAGES_URL + '/img/coins/HUAHUA.svg',
      "decimals": 6,
      "coinGeckoID": "chihuahua-token"
    },
    {
      "token": "stk/uxprt",
      "symbol": "stkXPRT",
      "name": "PSTAKE staked XPRT",
      "icon": process.env.CF_PAGES_URL + '/img/coins/stkXPRT.svg',
      "decimals": 6,
      "coinGeckoID": ""
    },
    {
      "token": "ibc/CCA9F9B22D39884C09975D45E1869B73A12B87080EE53CB44905CE2C422CA228",
      "symbol": "WBTC",
      "name": "Wrapped Bitcoin",
      "icon": process.env.CF_PAGES_URL + '/img/coins/WBTC.svg',
      "decimals": 8,
      "coinGeckoID": "wrapped-bitcoin"
    }
  ]
};