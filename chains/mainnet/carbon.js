module.exports = {
  chainID: "carbon-1",
  lcd: "https://api.carbon.network",
  gasAdjustment: 1.75,
  gasPrices: { swth: 1000 },
  prefix: "swth",
  coinType: "118",
  baseAsset: "swth",
  name: "Carbon",
  chainRegistryName: 'carbon',
  disabledModules: ['swap'],
  icon: process.env.CF_PAGES_URL + "/img/chains/Carbon.svg",
  gitRepo: 'https://github.com/Switcheo/carbon-bootstrap',
  autoCompound: {
    enabled: true,
    minRewards: 1000000
  },
  alliance: true,
  // ibc: {
  //   fromTerra: "channel-36",
  //   toTerra: "channel-12",
  //   icsFromTerra: {
  //     contract:
  //       "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
  //     toTerra: "channel-16",
  //     fromTerra: "channel-41",
  //   },
  // },
  channels: {
    "phoenix-1": "channel-12",
    "axelar-dojo-1": "channel-7",
    "stride-1": "channel-8",
    "cosmoshub-4": "channel-3",
    "kaiyo-1": "channel-9",
    "osmosis-1": "channel-0",
    "stafihub-1": "channel-13",
  },
  explorer: {
    address: "https://scan.carbon.network/account/{}?net=main",
    tx: "https://scan.carbon.network/transaction/{}?net=main",
    validator: "https://scan.carbon.network/validator/{}?net=main",
    block: "https://scan.carbon.network/block/{}?net=main",
  },
  tokens: [
    {
      token: "swth",
      symbol: "SWTH",
      name: "Carbon",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 8,
      coinGeckoID: 'switcheo',
    },
    {
      token: "cgt/1",
      symbol: "cgt/1",
      name: "Carbon Grouped USD",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "bnb.1.6.773edb",
      symbol: "bnb.1.6.773edb",
      name: "Carbon Binance Coin",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "eth.1.2.942d87",
      symbol: "cibETH",
      name: "Carbon Interest Bearing ETH",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "zwap.1.18.393529",
      symbol: "ZWAP",
      name: "Zilswap",
      icon: process.env.CF_PAGES_URL + "/img/coins/Zwap.svg",
      decimals: 12,
    },
    {
      token: "ava1.1.6.95712b",
      symbol: "AVA1",
      name: "Travala.com Token",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "blur.1.2.0c0069",
      symbol: "BLUR",
      name: "Blur",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "busd.1.6.754a80",
      symbol: "BUSD",
      name: "BUSD (BEP-20)",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "cglp.1.19.1698d3",
      symbol: "cGLP",
      name: "Carbon Wrapped GLP",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "cibt/eth.1.2.942d87",
      symbol: "cibETH",
      name: "Carbon Interest Bearing ETH",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token:
        "cibt/ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364",
      symbol: "cibEVMOS",
      name: "Carbon Interest Bearing EVMOS",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token:
        "ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364",
      symbol: "EVMOS",
      name: "Evmos",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 18,
    },
    {
      token: "zil.1.18.1a4a06",
      symbol: "ZIL",
      name: "Zilliqa",
      icon: process.env.CF_PAGES_URL + "/img/coins/Carbon.svg",
      decimals: 12,
    },
  ],
}
