module.exports = {
    chainID: 'teritori-1',
    lcd: 'https://teritori-rest.publicnode.com',
    rpc: 'https://teritori-rpc.publicnode.com',
    gasAdjustment: 1.75,
    gasPrices: {utori: 0.25},
    prefix: 'tori',
    coinType: '118',
    baseAsset: 'utori',
    name: 'Teritori',
    chainRegistryName: 'teritori',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Teritori.svg',
    gitRepo: 'https://github.com/TERITORI/teritori-chain',
    autoCompound: {
        enabled: true,
        minRewards: 100000
    },
    explorer: {
      address: 'https://finder.hexxagon.io/teritori-1/address/{}',
      tx: 'https://finder.hexxagon.io/teritori-1/tx/{}',
      validator: 'https://finder.hexxagon.io/teritori-1/validator/{}',
      block: 'https://finder.hexxagon.io/teritori-1/block/{}',
    },
    tokens: [
        {
            token: 'utori',
            symbol: 'TORI',
            name: 'Teritori',
            icon: process.env.CF_PAGES_URL + '/img/coins/utori.svg',
            decimals: 6,
            coinGeckoID: 'teritori',
        },
    ],
}
