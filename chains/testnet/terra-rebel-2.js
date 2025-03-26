module.exports = {
  chainID: 'rebel-2',
  lcd: 'http://81.169.136.147:1317',
  gasAdjustment: 1.9,
  gasPrices: {
    uluna: 29,
  },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra Classic (rebel-2)',
  icon: process.env.CF_PAGES_URL + '/img/coins/TerraAUDClassic.svg',
  gitRepo: 'https://github.com/classic-terra/core',
  isClassic: true,
  alliance: false,
  burnAddress: 'terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu',
  explorer: {
    address: 'https://finder.terra-classic.hexxagon.dev/testnet/address/{}',
    tx: 'https://finder.terra-classic.hexxagon.dev/testnet/tx/{}',
    validator: 'https://finder.terra-classic.hexxagon.dev/testnet/validator/{}',
    block: 'https://finder.terra-classic.hexxagon.dev/testnet/block/{}',
  },
  channels: {
    'juno-1': 'channel-20',
    'crescent-1': 'channel-49',
    'axelar-dojo-1': 'channel-19',
    'cosmoshub-4': 'channel-2',
    'osmosis-1': 'channel-28',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNC',
      name: 'Luna Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/LunaClassic.svg',
      decimals: 6,
    },
    {
      token: 'uusd',
      symbol: 'USTC',
      name: 'TerraUSD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraUSDClassic.svg',
      decimals: 6,
    },
    {
      token: 'factory/terra1zdpgj8am5nqqvht927k3etljyl6a52kwqup0je/utest766e',
      symbol: 'ALL',
      name: 'Alliance Test',
      icon: process.env.CF_PAGES_URL + '/img/chains/Atreides.png',
      decimals: 6,
    },
  ],
}
