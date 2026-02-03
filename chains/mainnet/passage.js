module.exports = {
  chainID: 'passage-2',
  lcd: 'https://api.passage.vitwit.com',
  rpc: 'https://rpc.passage.vitwit.com',
  gasAdjustment: 1.75,
  gasPrices: {
    upasg: 12.5,
  },
  prefix: 'pasg',
  coinType: '118',
  baseAsset: 'upasg',
  name: 'Passage',
  chainRegistryName: 'passage',
  disabledModules: ['swap'],
  icon: process.env.CF_PAGES_URL + '/img/chains/passage.png',
  gitRepo: 'https://github.com/envadiv/Passage3D',
  autoCompound: {
    enabled: true,
    minRewards: 1000000,
  },
  explorer: {
    address: 'https://finder.hexxagon.io/passage-2/address/{}',
    tx: 'https://finder.hexxagon.io/passage-2/tx/{}',
    validator: 'https://finder.hexxagon.io/passage-2/validator/{}',
    block: 'https://finder.hexxagon.io/passage-2/block/{}',
  },
  tokens: [
    {
      token: 'upasg',
      symbol: 'PASG',
      name: 'Passage',
      icon: process.env.CF_PAGES_URL + '/img/coins/PASG.png',
      decimals: 6,
      coinGeckoID: 'passage',
    },
  ],
}
