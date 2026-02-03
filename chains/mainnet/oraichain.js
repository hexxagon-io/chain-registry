module.exports = {
    chainID: 'Oraichain',
    lcd: 'https://lcd.orai.io',
    rpc: 'https://rpc.orai.io',
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
      address: 'https://finder.hexxagon.io/Oraichain/address/{}',
      tx: 'https://finder.hexxagon.io/Oraichain/tx/{}',
      validator: 'https://finder.hexxagon.io/Oraichain/validator/{}',
      block: 'https://finder.hexxagon.io/Oraichain/block/{}',
    },
    tokens: [
        {
            token: 'orai',
            symbol: 'ORAI',
            name: 'Oraichain',
            icon: process.env.CF_PAGES_URL + '/img/coins/orai.svg',
            decimals: 6,
            coinGeckoID: 'oraichain-token',
        },
    ],
}
