module.exports = {
      chainID: 'agoric-3',
      lcd: 'https://main.api.agoric.net:443',
      rpc: 'https://main.rpc.agoric.net:443',
      gasAdjustment: 1.75,
      gasPrices: {"ubld":0.05},
      prefix: 'agoric',
      coinType: '564',
      baseAsset: 'ubld',
      name: 'Agoric',
      chainRegistryName: 'agoric',
      disabledModules: ['swap'],
      icon: process.env.CF_PAGES_URL + '/img/chains/Agoric.svg',
      gitRepo: 'https://github.com/Agoric/agoric-sdk/',
      autoCompound: {
          enabled: true,
          minRewards: 1000000
      },
      explorer: {
          address: 'https://explorer.chainroot.io/agoric/accounts/${accountAddress}',
          tx: 'https://explorer.chainroot.io/agoric/transactions/${txHash}',
          validator: '',
          block: ''
      },
      tokens: [
          {
              token: 'ubld',
              symbol: 'BLD',
              name: 'Agoric',
              icon: process.env.CF_PAGES_URL + '/img/coins/Agoric.svg',
              decimals: 6,
              coinGeckoID: 'agoric',
          },
        {
              token: 'uist',
              symbol: 'IST',
              name: 'Inter Stable Token',
              icon: process.env.CF_PAGES_URL + '/img/coins/Inter Stable Token.svg',
              decimals: 6,
              coinGeckoID: 'inter-stable-token',
          }
      ],
  };