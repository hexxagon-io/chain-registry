module.exports = {
    chainID: 'arkh',
    lcd: 'https://arkh.api.m.anode.team',
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
    explorer: {
        address: 'https://main.anode.team//arkh/account/{}',
        tx: 'https://main.anode.team//arkh/tx/{}',
        validator: 'https://main.anode.team//arkh/staking/{}',
        block: 'https://main.anode.team//arkh/blocks/{}',
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
