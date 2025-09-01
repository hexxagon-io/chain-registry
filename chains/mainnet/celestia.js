module.exports = {
    chainID: 'celestia',
    lcd: 'https://celestia-rest.publicnode.com',
    rpc: 'https://celestia-rpc.publicnode.com',
    gasAdjustment: 1.75,
    gasPrices: { utia: 0.02 },
    prefix: 'celestia',
    coinType: '118',
    baseAsset: 'utia',
    name: 'Celestia',
    chainRegistryName: 'celestia',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Celestia.svg',
    autoCompound: {
        enabled: false,
        minRewards: 100000
    },
    channels: {
        'osmosis-1': 'channel-2',
        'phoenix-1': 'channel-15'
    },
    icsChannels: {},
    explorer: {
        address: 'https://ping.pub/celestia/account/{}',
        tx: 'https://ping.pub/celestia/tx/{}',
        validator: 'https://ping.pub/celestia/staking/{}',
        block: 'https://ping.pub/celestia/block/{}',
    },
    tokens: [
        {
            token: 'utia',
            symbol: 'TIA',
            name: 'Celestia',
            icon: process.env.CF_PAGES_URL + '/img/coins/Celestia.svg',
            decimals: 6,
            coinGeckoID: 'celestia',
        },
    ],
}
