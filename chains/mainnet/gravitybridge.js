module.exports = {
    chainID: 'gravity-bridge-3',
    lcd: 'https://gravitychain.io:1317',
    gasAdjustment: 1.75,
    gasPrices: {ugraviton: 0.0},
    prefix: 'gravity',
    coinType: '118',
    baseAsset: 'ugraviton',
    name: 'Gravity Bridge',
    chainRegistryName: 'gravitybridge',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Gravity.svg',
    gitRepo: 'https://github.com/Gravity-Bridge/Gravity-Bridge.git',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://www.mintscan.io/gravity-bridge/account/{}',
        tx: 'https://www.mintscan.io/gravity-bridge/txs/{}',
        validator: 'https://www.mintscan.io/gravity-bridge/validators/{}',
        block: 'https://www.mintscan.io/gravity-bridge/blocks/id/{}',
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
