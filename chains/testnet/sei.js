module.exports = {
  chainID: 'atlantic-2',
  lcd: 'https://sei-testnet-api.polkachu.com',
  rpc: 'https://sei-testnet-rpc.polkachu.com',
  gasAdjustment: 2,
  gasPrices: { usei: 0.01 },
  prefix: 'sei',
  coinType: '118',
  baseAsset: 'usei',
  name: 'Sei',
  chainRegistryName: 'seitestnet',
  icon: process.env.CF_PAGES_URL + '/img/chains/sei.svg',
  gitRepo: 'https://github.com/sei-protocol/sei-chain',
  autoCompound: {
    enabled: false,
    minRewards: 100000,
  },
  ibc: {
    fromTerra: 'channel-100',
    toTerra: 'channel-11',
  },
  channels: {
    'pisco-1': 'channel-11',
  },
  explorer: {
    address: 'https://finder.hexxagon.io/atlantic-2/address/{}',
    tx: 'https://finder.hexxagon.io/atlantic-2/tx/{}',
    validator: 'https://finder.hexxagon.io/atlantic-2/validator/{}',
    block: 'https://finder.hexxagon.io/atlantic-2/block/{}',
  },
  tokens: [
    {
      token: 'usei',
      symbol: 'SEI',
      name: 'Test Sei',
      icon: process.env.CF_PAGES_URL + '/img/coins/sei.svg',
      decimals: 6,
    },
  ],
}
