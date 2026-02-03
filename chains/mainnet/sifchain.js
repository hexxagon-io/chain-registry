module.exports = {
  chainID: 'sifchain-1',
  lcd: 'https://sifchain-api.polkachu.com',
  rpc: 'https://sifchain-rpc.polkachu.com',
  gasAdjustment: 1.75,
  gasPrices: {
    rowan: 1500000000000,
  },
  prefix: 'sif',
  coinType: '118',
  baseAsset: 'rowan',
  name: 'Sifchain',
  chainRegistryName: 'sifchain',
  disabledModules: ['swap'],
  icon: process.env.CF_PAGES_URL + '/img/chains/sifchain.svg',
  gitRepo: 'https://github.com/Sifchain/sifnode.git',
  autoCompound: {
    enabled: true,
    minRewards: 1000000,
  },
  explorer: {
    address: 'https://finder.hexxagon.io/sifchain-1/address/{}',
    tx: 'https://finder.hexxagon.io/sifchain-1/tx/{}',
    validator: 'https://finder.hexxagon.io/sifchain-1/validator/{}',
    block: 'https://finder.hexxagon.io/sifchain-1/block/{}',
  },
  tokens: [
    {
      token: 'rowan',
      symbol: 'ROWAN',
      name: 'Sifchain',
      icon: process.env.CF_PAGES_URL + '/img/coins/ROWAN.svg',
      decimals: 18,
      coinGeckoID: 'sifchain',
    },
  ],
}
