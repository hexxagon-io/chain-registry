module.exports = {
    chainID: 'atomone-1',
    lcd: 'https://atomone-rest.publicnode.com',
    gasAdjustment: 1.75,
    gasPrices: {uatone: 0.006},
    prefix: 'atone',
    coinType: '118',
    baseAsset: 'uatone',
    name: 'AtomOne',
    chainRegistryName: 'atomone',
    disabledModules: ['swap', 'gov'],
    icon: process.env.CF_PAGES_URL + '/img/chains/atomone.svg',
    gitRepo: 'https://github.com/atomone-hub/atomone',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://www.mintscan.io/atomone/account/{}',
        tx: 'https://www.mintscan.io/atomone/txs/{}',
        validator: 'https://www.mintscan.io/atomone/validators/{}',
        block: 'https://www.mintscan.io/atomone/blocks/id/{}',
    },
    tokens: [
        {
            token: 'uatone',
            symbol: 'ATONE',
            name: 'AtomOne',
            icon: process.env.CF_PAGES_URL + '/img/coins/atomone.svg',
            decimals: 6,
            coinMarketCapID: 'atomone',
        },
    ],
}
