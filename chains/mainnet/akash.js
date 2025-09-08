module.exports = {
    chainID: 'akashnet-2',
    lcd: 'https://akash-api.polkachu.com',
    rpc: 'https://akash-rpc.polkachu.com',
    gasAdjustment: 1.75,
    gasPrices: {uakt: 0.025},
    prefix: 'akash',
    coinType: '118',
    baseAsset: 'uakt',
    name: 'Akash',
    chainRegistryName: 'akash',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Akash.svg',
    gitRepo: 'https://github.com/akash-network/node',
    autoCompound: {
        enabled: true,
        minRewards: 100000
    },
    // ibc: {
    //   fromTerra: 'channel-45',
    //   toTerra: 'channel-56',
    // },
    channels: {
        'phoenix-1': 'channel-56',
        'cosmoshub-4': 'channel-17',
        'crescent-1': 'channel-70',
        'juno-1': 'channel-35',
        'kaiyo-1': 'channel-63',
        'osmosis-1': 'channel-9',
    },
    explorer: {
        address: 'https://ping.pub/akash/account/{}',
        tx: 'https://ping.pub/akash/tx/{}',
        validator: 'https://ping.pub/akash/staking/{}',
        block: 'https://ping.pub/akash/block/{}',
    },
    tokens: [
        {
            token: 'uakt',
            symbol: 'AKT',
            name: 'Akash',
            icon: process.env.CF_PAGES_URL + '/img/coins/Akash.svg',
            decimals: 6,
            coinGeckoID: 'akash-network',
        },
    ],
}
