module.exports = {
    chainID: 'dydx-testnet-4',
    lcd: 'https://dydx-testnet-api.polkachu.com',
    rpc: 'https://dydx-testnet-rpc.polkachu.com',
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
    icon: process.env.CF_PAGES_URL + '/img/chains/dydx.svg',
    explorer: {
        address: 'https://testnet.mintscan.io/dydx-testnet/account/{}',
        tx: 'https://testnet.mintscan.io/dydx-testnet/txs/{}',
        validator: 'https://testnet.mintscan.io/dydx-testnet/validators/{}',
        block: 'https://testnet.mintscan.io/dydx-testnet/blocks/id/{}',
    },
    tokens: [
        {
            token: "adydx",
            name: "dYdX",
            symbol: "DYDX",
            decimals: 18,
            icon: process.env.CF_PAGES_URL + "/img/coins/dydx.svg"
        }
    ],
}
