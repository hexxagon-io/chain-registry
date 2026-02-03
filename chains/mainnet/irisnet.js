module.exports = {
    chainID: 'irishub-1',
    lcd: 'https://api.irishub-1.irisnet.org',
    rpc: 'https://rpc.irishub-1.irisnet.org',
    gasAdjustment: 1.75,
    gasPrices: {uiris: 0.3},
    prefix: 'iaa',
    valPrefix: 'iva',
    coinType: '118',
    baseAsset: 'uiris',
    name: 'IRISnet',
    chainRegistryName: 'irisnet',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Iris.svg',
    gitRepo: 'https://github.com/irisnet/irishub',
    autoCompound: {
        enabled: true,
        minRewards: 100000
    },
    // ibc: {
    //   fromTerra: 'channel-45',
    //   toTerra: 'channel-56',
    // },
    // channels: {
    //   'phoenix-1': 'channel-56',
    //   'cosmoshub-4': 'channel-17',
    //   'crescent-1': 'channel-70',
    //   'juno-1': 'channel-35',
    //   'kaiyo-1': 'channel-63',
    //   'osmosis-1': 'channel-9',
    // },
    explorer: {
      address: 'https://finder.hexxagon.io/irishub-1/address/{}',
      tx: 'https://finder.hexxagon.io/irishub-1/tx/{}',
      validator: 'https://finder.hexxagon.io/irishub-1/validator/{}',
      block: 'https://finder.hexxagon.io/irishub-1/block/{}',
    },
    tokens: [
        {
            token: 'uiris',
            symbol: 'IRIS',
            name: 'IRISnet',
            icon: process.env.CF_PAGES_URL + '/img/coins/Iris.svg',
            decimals: 6,
            coinGeckoID: 'iris-network',
        },
    ],
}
