module.exports = {
    chainID: 'pacific-1',
    lcd: 'https://sei-api.polkachu.com',
    rpc: 'https://sei-rpc.polkachu.com',
    gasAdjustment: 2,
    gasPrices: {usei: 0.1},
    prefix: 'sei',
    coinType: '118',
    baseAsset: 'usei',
    name: 'Sei',
    chainRegistryName: 'sei',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/sei.svg',
    gitRepo: 'https://github.com/sei-protocol/sei-chain',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    // ibc: {
    //   fromTerra: 'channel-158',
    //   toTerra: 'channel-3',
    // },
    channels: {
        'osmosis-1': 'channel-0',
        'axelar-dojo-1': 'channel-2',
        'phoenix-1': 'channel-3',
        'cosmoshub-4': 'channel-1',
        'migaloo-1': 'channel-10',
        'stride-1': 'channel-11',
    },
    explorer: {
      address: 'https://finder.hexxagon.io/pacific-1/address/{}',
      tx: 'https://finder.hexxagon.io/pacific-1/tx/{}',
      validator: 'https://finder.hexxagon.io/pacific-1/validator/{}',
      block: 'https://finder.hexxagon.io/pacific-1/block/{}',
    },
    tokens: [
        {
            token: 'usei',
            symbol: 'SEI',
            name: 'Sei',
            icon: process.env.CF_PAGES_URL + '/img/coins/sei.svg',
            decimals: 6,
            coinGeckoID: 'sei-network',
        },
    ],
}
