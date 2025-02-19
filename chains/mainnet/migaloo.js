module.exports = {
    chainID: 'migaloo-1',
    lcd: 'https://migaloo-api.polkachu.com',
    gasAdjustment: 1.75,
    gasPrices: {uwhale: 0.25},
    prefix: 'migaloo',
    coinType: '118',
    baseAsset: 'uwhale',
    name: 'Migaloo',
    chainRegistryName: 'migaloo',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Migaloo.svg',
    gitRepo: 'https://github.com/White-Whale-Defi-Platform/migaloo-chain.git',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    alliance: true,
    // ibc: {
    //   fromTerra: 'channel-86',
    //   toTerra: 'channel-0',
    //   icsFromTerra: {
    //     contract:
    //       'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
    //     fromTerra: 'channel-87',
    //     toTerra: 'channel-2',
    //   },
    // },
    channels: {
        'phoenix-1': 'channel-0',
        'chihuahua-1': 'channel-10',
        'comdex-1': 'channel-12',
        'kaiyo-1': 'channel-8',
        'osmosis-1': 'channel-5',
        'pacific-1': 'channel-52',
    },
    explorer: {
        address: 'https://ping.pub/Migaloo/account/{}',
        tx: 'https://ping.pub/Migaloo/tx/{}',
        validator: 'https://ping.pub/Migaloo/staking/{}',
        block: 'https://ping.pub/Migaloo/block/{}',
    },
    tokens: [
        {
            token: 'uwhale',
            symbol: 'WHALE',
            name: 'Migaloo',
            icon: process.env.CF_PAGES_URL + '/img/coins/Whale.svg',
            decimals: 6,
            coinGeckoID: 'white-whale',
        },
    ],
    cw20Tokens: require('../../cw20/tokens/mainnet/migaloo'),
}
