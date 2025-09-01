module.exports = {
    chainID: 'dydx-mainnet-1',
    lcd: 'https://dydx-rest.publicnode.com',
    rpc: 'https://dydx-rpc.publicnode.com',
    gasAdjustment: 1.75,
    gasPrices: {
        adydx: 12500000000,
        // uncomment this when noble is supported
        // 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5': 0.025,
    },
    prefix: 'dydx',
    coinType: '118',
    baseAsset: 'adydx',
    name: 'dYdX Protocol',
    chainRegistryName: 'dydx',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/dydx.svg',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    channels: {
        'kaiyo-1': 'channel-5',
        'noble-1': 'channel-0',
        'osmosis-1': 'channel-3',
        'stride-1': 'channel-1',
        'phoenix-1': 'channel-9',
    },
    icsChannels: {},
    explorer: {
        address: 'https://ping.pub/dydx/account/{}',
        tx: 'https://ping.pub/dydx/tx/{}',
        validator: 'https://ping.pub/dydx/staking/{}',
        block: 'https://ping.pub/dydx/block/{}',
    },
    tokens: [
        {
            token: "adydx",
            name: "dYdX",
            symbol: "DYDX",
            decimals: 18,
            icon: process.env.CF_PAGES_URL + "/img/coins/dydx.svg",
            coinGeckoID: 'dydx-chain',
        }
    ],
}
