module.exports = {
    chainID: 'Oraichain',
    lcd: 'http://lcd.orai.io',
    gasAdjustment: 1.75,
    gasPrices: {orai: 0.005},
    prefix: 'orai',
    coinType: '118',
    baseAsset: 'orai',
    name: 'Oraichain',
    chainRegistryName: 'oraichain',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/orai.svg',
    gitRepo: 'https://github.com/oraichain/wasmd',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://atomscan.com/orai/blocks/{}',
        tx: 'https://atomscan.com/orai/blocks/{}',
        validator: 'https://atomscan.com/orai/validators/{}',
        block: 'https://atomscan.com/orai/blocks/{}',
    },
    tokens: [
        {
            token: 'orai',
            symbol: 'ORAI',
            name: 'Oraichain',
            icon: process.env.CF_PAGES_URL + '/img/coins/orai.svg',
            decimals: 6,
            coinGeckoID: 'orai',
        },
    ],
}
