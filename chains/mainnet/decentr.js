module.exports = {
    chainID: 'mainnet-3',
    lcd: 'https://decentr.api.m.stavr.tech',
    rpc: 'https://decentr.rpc.m.stavr.tech',
    gasAdjustment: 1.75,
    gasPrices: {udec: 0.025},
    prefix: 'decentr',
    coinType: '118',
    baseAsset: 'udec',
    name: 'Decentr',
    chainRegistryName: 'decentr',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Decentr.svg',
    gitRepo: 'https://github.com/Decentr-net/decentr',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    // ibc: {
    //   fromTerra: 'channel-5',
    //   toTerra: 'channel-99',
    // },
    channels: {
        'phoenix-1': 'channel-99',
        'osmosis-1': 'channel-1',
    },
    explorer: {
        address: 'https://atomscan.com/decentr/blocks/{}',
        tx: 'https://atomscan.com/decentr/blocks/{}',
        validator: 'https://atomscan.com/decentr/validators/{}',
        block: 'https://atomscan.com/decentr/blocks/{}',
    },
    tokens: [
        {
            token: 'udec',
            symbol: 'DEC',
            name: 'Decentr',
            icon: process.env.CF_PAGES_URL + '/img/coins/Decentr.svg',
            decimals: 6,
            coinGeckoID: 'decentr',
        },
    ],
}
