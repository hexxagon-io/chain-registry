module.exports = {
    chainID: 'noble-1',
    lcd: 'https://noble-api.polkachu.com',
    gasAdjustment: 1.75,
    gasPrices: {
        uusdc: 0.1,
        'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0': 0.01,
    },
    prefix: 'noble',
    coinType: '118',
    baseAsset: 'uusdc',
    name: 'Noble',
    chainRegistryName: 'noble',
    disabledModules: ['gov', 'swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Noble.svg',
    channels: {
        'phoenix-1': 'channel-30',
        'migaloo-1': 'channel-14',
        'cosmoshub-4': 'channel-4',
        'crescent-1': 'channel-0',
        'juno-1': 'channel-3',
        'osmosis-1': 'channel-1',
        'kaiyo-1': 'channel-2',
        'dydx-mainnet-1': 'channel-33',
        'stargaze-1': 'channel-11',
    },
    explorer: {
        address: 'https://www.mintscan.io/noble/account/{}',
        tx: 'https://www.mintscan.io/noble/txs/{}',
        validator: 'https://www.mintscan.io/noble/validators/{}',
        block: 'https://www.mintscan.io/noble/blocks/id/{}',
    },
    tokens: [
        {
            token: 'ustake',
            symbol: 'STAKE',
            name: 'Stake',
            icon: process.env.CF_PAGES_URL + '/img/coins/Noble.svg',
            decimals: 6,
        },
        {
            token: 'ufrienzies',
            symbol: 'FRNZ',
            name: 'frienzies',
            icon: process.env.CF_PAGES_URL + '/img/coins/Frnz.svg',
            decimals: 6,
        },
        {
            token: 'uusdc',
            symbol: 'USDC',
            name: 'USD Coin',
            icon: process.env.CF_PAGES_URL + '/img/coins/USDC.svg',
            decimals: 6,
            coinGeckoID: 'usd-coin',
        },
    ],
}
