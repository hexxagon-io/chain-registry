module.exports = {
  chainID: 'ares-1',
  lcd: 'https://testnet-rest.marsprotocol.io',
  gasAdjustment: 2,
  gasPrices: { umars: 0.0 },
  prefix: 'mars',
  coinType: '330',
  baseAsset: 'umars',
  name: 'Mars',
  icon: process.env.CF_PAGES_URL + '/img/chains/Mars.svg',
  gitRepo: 'https://github.com/mars-protocol/hub',
  ibc: {
    toTerra: 'channel-0',
    fromTerra: 'channel-189',
  },
  channels: {
    'pisco-1': 'channel-0',
  },
  explorer: {
    address: 'https://testnet-explorer.marsprotocol.io/accounts/{}',
    tx: 'https://testnet-explorer.marsprotocol.io/transactions/{}',
    validator: 'https://testnet-explorer.marsprotocol.io/validators/{}',
    block: 'https://testnet-explorer.marsprotocol.io/blocks/{}',
  },
  tokens: [
    {
      token: 'umars',
      symbol: 'MARS',
      name: 'Test Mars',
      icon: process.env.CF_PAGES_URL + '/img/coins/Mars.svg',
      decimals: 6,
    },
  ],
}
