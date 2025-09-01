module.exports = {
    chainID: 'bitsong-2b',
    lcd: 'https://lcd.explorebitsong.com',
    rpc: 'https://rpc.explorebitsong.com',
    gasAdjustment: 1.75,
    gasPrices: {ubtsg: 3.0},
    prefix: 'bitsong',
    coinType: '118',
    baseAsset: 'ubtsg',
    name: 'BitSong',
    chainRegistryName: 'bitsong',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/BitSong.svg',
    gitRepo: 'https://github.com/bitsongofficial/go-bitsong.git',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    explorer: {
        address: 'https://ping.pub/bitsong/account/{}',
        tx: 'https://ping.pub/bitsong/tx/{}',
        validator: 'https://ping.pub/bitsong/staking/{}',
        block: 'https://ping.pub/bitsong/block/{}',
    },
    tokens: [
        {
            token: 'ubtsg',
            symbol: 'BTSG',
            name: 'BitSong',
            icon: process.env.CF_PAGES_URL + '/img/coins/BitSong.svg',
            decimals: 6,
            coinGeckoID: 'bitsong',
        },
    ],
}
