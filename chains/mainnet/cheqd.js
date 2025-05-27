module.exports = {
    chainID: 'cheqd-mainnet-1',
    lcd: 'https://cheqd-rest.publicnode.com',
    gasAdjustment: 1.75,
    gasPrices: { ncheq: 7500 },
    prefix: 'cheqd',
    coinType: '118',
    baseAsset: 'ncheq',
    name: 'cheqd',
    chainRegistryName: 'cheqd',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Cheqd.svg',
    gitRepo: 'https://github.com/cheqd/cheqd-node.git',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    // ibc: {
    //   fromTerra: 'channel-89',
    //   toTerra: 'channel-9',
    // },
    channels: {
        'phoenix-1': 'channel-9',
        'osmosis-1': 'channel-0',
    },
    explorer: {
        address: 'https://explorer.cheqd.io/accounts/{}',
        tx: 'https://explorer.cheqd.io/transactions/{}',
        validator: 'https://explorer.cheqd.io/validators/{}',
        block: 'https://explorer.cheqd.io/blocks/{}',
    },
    tokens: [
        {
            token: 'ncheq',
            symbol: 'CHEQ',
            name: 'Cheq',
            icon: process.env.CF_PAGES_URL + '/img/coins/Cheqd.svg',
            decimals: 9,
            coinGeckoID: 'cheqd-network',
        },
    ],
}
