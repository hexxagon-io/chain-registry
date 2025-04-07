module.exports = {
    chainID: 'lum-network-1',
    lcd: 'https://lum.api.m.stavr.tech',
    gasAdjustment: 1.75,
    gasPrices: {ulum: 0.025},
    prefix: 'lum',
    coinType: '118',
    baseAsset: 'ulum',
    name: 'Lum Network',
    chainRegistryName: 'lumnetwork',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Lum.svg',
    gitRepo: 'https://github.com/lum-network/chain.git',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://www.mintscan.io/lum/account/{}',
        tx: 'https://www.mintscan.io/lum/txs/{}',
        validator: 'https://www.mintscan.io/lum/validators/{}',
        block: 'https://www.mintscan.io/lum/blocks/id/{}',
    },
    tokens: [
        {
            token: 'ulum',
            symbol: 'LUM',
            name: 'Lum Network',
            icon: process.env.CF_PAGES_URL + '/img/coins/Lum.svg',
            decimals: 6,
            coinGeckoID: 'lum-network',
        },
    ],
}
