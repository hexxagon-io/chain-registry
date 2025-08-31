module.exports = {
    chainID: 'sentinelhub-2',
    lcd: 'https://api-sentinel.busurnode.com',
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
        address: 'https://ping.pub/sentinel/account/{}',
        tx: 'https://ping.pub/sentinel/tx/{}',
        validator: 'https://ping.pub/sentinel/staking/{}',
        block: 'https://ping.pub/sentinel/block/{}',
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
