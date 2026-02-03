module.exports = {
    chainID: 'arkh',
    lcd: 'https://arkh.api.m.anode.team',
    rpc: 'https://arkh.rpc.m.anode.team',
    gasAdjustment: 1.75,
    gasPrices: {arkh: 0.025},
    prefix: 'arkh',
    coinType: '118',
    baseAsset: 'arkh',
    name: 'Arkhadian',
    chainRegistryName: 'arkh',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/arkh.svg',
    gitRepo: 'https://github.com/vincadian/arkh-blockchain',
    autoCompound: {
        enabled: true,
        minRewards: 1000000
    },
    channels: {
        'osmosis-1': 'channel-61',
        'cosmoshub-4': 'channel-9',
    },
    explorer: {
      address: 'https://finder.hexxagon.io/arkh/address/{}',
      tx: 'https://finder.hexxagon.io/arkh/tx/{}',
      validator: 'https://finder.hexxagon.io/arkh/validator/{}',
      block: 'https://finder.hexxagon.io/arkh/block/{}',
    },
    tokens: [
        {
            token: 'arkh',
            symbol: 'ARKH',
            name: 'Arkhadian',
            icon: process.env.CF_PAGES_URL + '/img/coins/arkh.svg',
            decimals: 6,
        },
    ],
}
