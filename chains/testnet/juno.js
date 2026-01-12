module.exports = {
  chainID: 'uni-6',
  lcd: 'https://juno-testnet-api.polkachu.com',
  rpc: 'https://juno-testnet-rpc.polkachu.com',
  gasAdjustment: 2,
  gasPrices: { ujunox: 0.015 },
  prefix: 'juno',
  coinType: '118',
  baseAsset: 'ujunox',
  name: 'Juno',
  chainRegistryName: 'junotestnet',
  icon: process.env.CF_PAGES_URL + '/img/chains/Juno.svg',
  gitRepo: 'https://github.com/CosmosContracts/juno',
  autoCompound: {
    enabled: false,
    minRewards: 100000,
  },
  explorer: {
    address: 'https://testnet.juno.explorers.guru/account/{}',
    tx: 'https://testnet.juno.explorers.guru/transaction/{}',
    validator: 'https://testnet.juno.explorers.guru/validator/{}',
    block: 'https://testnet.juno.explorers.guru/block/{}',
  },
  tokens: [
    {
      token: 'ujunox',
      symbol: 'JUNO',
      name: 'Test Juno',
      icon: process.env.CF_PAGES_URL + '/img/coins/Juno.svg',
      decimals: 6,
    },
  ],
}
