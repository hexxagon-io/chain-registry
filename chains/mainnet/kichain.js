module.exports = {
    chainID: 'kichain-2',
    lcd: 'https://kichain-api.polkachu.com',
    rpc: 'https://kichain-rpc.polkachu.com',
    gasAdjustment: 1.75,
    gasPrices: {uxki: 0.03},
    prefix: 'ki',
    coinType: '118',
    baseAsset: 'uxki',
    name: 'Ki',
    chainRegistryName: 'kichain',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Kichain.svg',
    gitRepo: 'https://github.com/KiFoundation/ki-tools',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://ping.pub/kichain/account/{}',
        tx: 'https://ping.pub/kichain/tx/{}',
        validator: 'https://ping.pub/kichain/staking/{}',
        block: 'https://ping.pub/kichain/block/{}',
    },
    tokens: [
        {
            token: 'uxki',
            symbol: 'XKI',
            name: 'Ki',
            icon: process.env.CF_PAGES_URL + '/img/coins/Kichain.svg',
            decimals: 6,
            coinGeckoID: 'ki',
        },
    ],
}
