module.exports = {
    chainID: 'chihuahua-1',
    lcd: 'https://api.chihuahua.wtf',
    rpc: 'https://rpc.chihuahua.wtf',
    gasAdjustment: 2,
    gasPrices: {uhuahua: 1250},
    prefix: 'chihuahua',
    coinType: '118',
    baseAsset: 'uhuahua',
    name: 'Chihuahua',
    chainRegistryName: 'chihuahua',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/huahua.svg',
    gitRepo: 'https://github.com/ChihuahuaChain/chihuahua',
    autoCompound: {
        enabled: true,
        minRewards: 100000
    },
    channels: {
        'phoenix-1': 'channel-34',
        'juno-1': 'channel-11',
        'migaloo-1': 'channel-39',
        'osmosis-1': 'channel-7',
        'stafihub-1': 'channel-25',
    },
    explorer: {
        address: 'https://ping.pub/chihuahua/account/{}',
        tx: 'https://ping.pub/chihuahua/tx/{}',
        validator: 'https://ping.pub/chihuahua/staking/{}',
        block: 'https://ping.pub/chihuahua/block/{}',
    },
    tokens: [
        {
            token: 'uhuahua',
            symbol: 'HUAHUA',
            name: 'Huahua',
            icon: process.env.CF_PAGES_URL + '/img/chains/huahua.svg',
            decimals: 6,
            coinGeckoID: 'chihuahua-token',
        },
    ],
    cw20Tokens: require('../../cw20/tokens/mainnet/chihuahua'),
}
