module.exports = {
    chainID: 'gravity-bridge-3',
    lcd: 'https://gravitychain.io:1317',
    rpc: 'https://gravitychain.io:26657',
    gasAdjustment: 1.75,
    gasPrices: {ugraviton: 0.0},
    prefix: 'gravity',
    coinType: '118',
    baseAsset: 'ugraviton',
    name: 'Gravity Bridge',
    chainRegistryName: 'gravitybridge',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Gravity.svg',
    gitRepo: 'https://github.com/Gravity-Bridge/Gravity-Bridge',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://ping.pub/gravity-bridge/account/{}',
        tx: 'https://ping.pub/gravity-bridge/tx/{}',
        validator: 'https://ping.pub/gravity-bridge/staking/{}',
        block: 'https://ping.pub/gravity-bridge/block/{}',
    },
    tokens: [
        {
            token: 'ugraviton',
            symbol: 'GRAV',
            name: 'Gravity Bridge',
            icon: process.env.CF_PAGES_URL + '/img/coins/Gravity.svg',
            decimals: 6,
            coinGeckoID: 'graviton',
        },
    ],
}
