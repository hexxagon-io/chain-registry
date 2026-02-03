module.exports = {
    chainID: 'lum-network-1',
    lcd: 'https://lum.api.m.stavr.tech',
    rpc: 'https://lum.rpc.m.stavr.tech',
    gasAdjustment: 1.75,
    gasPrices: {ulum: 0.025},
    prefix: 'lum',
    coinType: '118',
    baseAsset: 'ulum',
    name: 'Lum Network',
    chainRegistryName: 'lumnetwork',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Lum.svg',
    gitRepo: 'https://github.com/lum-network/chain',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
      address: 'https://finder.hexxagon.io/lum-network-1/address/{}',
      tx: 'https://finder.hexxagon.io/lum-network-1/tx/{}',
      validator: 'https://finder.hexxagon.io/lum-network-1/validator/{}',
      block: 'https://finder.hexxagon.io/lum-network-1/block/{}',
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
