module.exports = {
    chainID: 'ssc-1',
    lcd: 'https://saga-rest.publicnode.com',
    rpc: 'https://saga-rpc.publicnode.com',
    gasAdjustment: 1.75,
    gasPrices: {ulum: 0.025},
    prefix: 'saga',
    coinType: '118',
    baseAsset: 'usaga',
    name: 'Saga',
    chainRegistryName: 'saga',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/saga.svg',
    gitRepo: 'https://github.com/sagaxyz/ssc.git',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://www.mintscan.io/saga/account/{}',
        tx: 'https://www.mintscan.io/saga/txs/{}',
        validator: 'https://www.mintscan.io/saga/validators/{}',
        block: 'https://www.mintscan.io/saga/blocks/id/{}',
    },
    tokens: [
        {
            token: 'usaga',
            symbol: 'SAGA',
            name: 'Saga',
            icon: process.env.CF_PAGES_URL + '/img/coins/saga.svg',
            decimals: 6,
            coinGeckoID: 'saga-2',
        },
    ],
}
