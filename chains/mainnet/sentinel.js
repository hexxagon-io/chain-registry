module.exports = {
    chainID: 'sentinelhub-2',
    lcd: 'https://api-sentinel.busurnode.com',
    rpc: 'https://rpc-sentinel.busurnode.com',
    gasAdjustment: 1.75,
    gasPrices: {udvpn: 0.25},
    prefix: 'sent',
    coinType: '118',
    baseAsset: 'udvpn',
    name: 'Sentinel',
    chainRegistryName: 'sentinel',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/sentinel.svg',
    gitRepo: 'https://github.com/sentinel-official/hub',
    autoCompound: {
        enabled: false,
        minRewards: 100000
    },
    explorer: {
      address: 'https://finder.hexxagon.io/sentinelhub-2/address/{}',
      tx: 'https://finder.hexxagon.io/sentinelhub-2/tx/{}',
      validator: 'https://finder.hexxagon.io/sentinelhub-2/validator/{}',
      block: 'https://finder.hexxagon.io/sentinelhub-2/block/{}',
    },
    tokens: [
        {
            token: 'udvpn',
            symbol: 'DVPN',
            name: 'Sentinel',
            icon: process.env.CF_PAGES_URL + '/img/coins/dvpn.svg',
            decimals: 6,
            coinGeckoID: 'sentinel',
        },
    ],
}
