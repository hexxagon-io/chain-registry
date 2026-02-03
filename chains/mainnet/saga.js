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
    gitRepo: 'https://github.com/sagaxyz/ssc',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
      address: 'https://finder.hexxagon.io/ssc-1/address/{}',
      tx: 'https://finder.hexxagon.io/ssc-1/tx/{}',
      validator: 'https://finder.hexxagon.io/ssc-1/validator/{}',
      block: 'https://finder.hexxagon.io/ssc-1/block/{}',
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
