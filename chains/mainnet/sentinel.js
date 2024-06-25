module.exports = {
    chainID: 'sentinelhub-2',
    lcd: 'https://api-sentinel.busurnode.com',
    gasAdjustment: 1.75,
    gasPrices: {udvpn: 0.25},
    prefix: 'sent',
    coinType: '118',
    baseAsset: 'udvpn',
    name: 'Sentinel',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/sentinel.svg',
    gitRepo: 'https://github.com/sentinel-official/hub',
    explorer: {
        address: 'https://www.mintscan.io/sentinel/account/{}',
        tx: 'https://www.mintscan.io/sentinel/txs/{}',
        validator: 'https://www.mintscan.io/sentinel/validators/{}',
        block: 'https://www.mintscan.io/sentinel/blocks/id/{}',
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
