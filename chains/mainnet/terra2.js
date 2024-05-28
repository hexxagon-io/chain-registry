module.exports = {
    chainID: 'phoenix-1',
    lcd: 'https://lcd-terra.tfl.foundation',
    gasAdjustment: 1.75,
    gasPrices: {
        uluna: 0.015,
        'ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4': 0.018, // axlUSDC
        'ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB': 0.018, // noble USDC
    },
    prefix: 'terra',
    coinType: '330',
    baseAsset: 'uluna',
    name: 'Terra',
    // disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
    alliance: true,
    channels: {
        'akashnet-2': 'channel-273',
        'axelar-dojo-1': 'channel-6',
        'carbon-1': 'channel-36',
        'cheqd-mainnet-1': 'channel-301',
        'chihuahua-1': 'channel-44',
        'comdex-1': 'channel-39',
        'cosmoshub-4': 'channel-0',
        'crescent-1': 'channel-37',
        'mainnet-3': 'channel-315',
        'juno-1': 'channel-2',
        'kaiyo-1': 'channel-10',
        'mars-1': 'channel-78',
        'migaloo-1': 'channel-86',
        'osmosis-1': 'channel-1',
        'stride-1': 'channel-46',
        'pacific-1': 'channel-158',
        'noble-1': 'channel-253',
        'stafihub-1': 'channel-204',
        'neutron-1': 'channel-229',
        'injective-1': 'channel-255',
        'dydx-mainnet-1': 'channel-299',
        'celestia': 'channel-300',
        'stargaze-1': 'channel-324',
        'andromeda-1': 'channel-351',
        'kava_2222-10': 'channel-272',
        'columbus-5': 'channel-314',
    },
    // NEW ICS CHANNELS
    ics20Channels: {
        'carbon-1': [
            {
                contract:
                    'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
                channel: 'channel-41',
                otherChannel: 'channel-16',
            },
        ],
        'juno-1': [
            {
                contract:
                    'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
                channel: 'channel-32',
                otherChannel: 'channel-153',
            },
        ],
        'kaiyo-1': [
            {
                contract:
                    'terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
                channel: 'channel-34',
                otherChannel: 'channel-43',
                tokens: [
                    'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
                    'terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8',
                ],
            },
            {
                contract:
                    'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
                channel: 'channel-28',
                otherChannel: 'channel-36',
            },
        ],
        'migaloo-1': [
            {
                contract:
                    'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
                channel: 'channel-87',
                otherChannel: 'channel-2',
            },
        ],
        'osmosis-1': [
            {
                contract:
                    'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
                channel: 'channel-26',
                otherChannel: 'channel-341',
            },
        ],
        'chihuahua-1': [
            {
                contract:
                    'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
                channel: 'channel-114',
                otherChannel: 'channel-42',
            },
        ],
        'pacific-1': [
            {
                contract:
                    'terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
                channel: 'channel-171',
                otherChannel: 'channel-8',
                tokens: [
                    'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
                ],
            },
        ],
        'neutron-1': [
            {
                contract:
                    'terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
                channel: 'channel-167',
                otherChannel: 'channel-5',
                tokens: [
                    'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
                ],
            },
        ],
        'injective-1': [
            {
                contract:
                    'terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
                channel: 'channel-91',
                otherChannel: 'channel-104',
                tokens: [
                    'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
                ],
            },
            {
                contract:
                    'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
                channel: 'channel-116',
                otherChannel: 'channel-118',
            },
        ],
    },
    // LEGACY ICS CHANNELS (to be removed soon)
    icsChannels: {
        'carbon-1': {
            contract:
                'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel: 'channel-41',
            otherChannel: 'channel-16',
        },
        'juno-1': {
            contract:
                'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel: 'channel-32',
            otherChannel: 'channel-153',
        },
        'kaiyo-1': {
            contract:
                'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel: 'channel-28',
            otherChannel: 'channel-36',
        },
        'migaloo-1': {
            contract:
                'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel: 'channel-87',
            otherChannel: 'channel-2',
        },
        'osmosis-1': {
            contract:
                'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel: 'channel-26',
            otherChannel: 'channel-341',
        },
    },
    // doesn't require IBC channels since it's already on all the other chains
    explorer: {
        address: 'https://terrasco.pe/mainnet/address/{}',
        tx: 'https://terrasco.pe/mainnet/tx/{}',
        validator: 'https://terrasco.pe/mainnet/validator/{}',
        block: 'https://terrasco.pe/mainnet/block/{}',
    },
    tokens: [
        {
            token: 'uluna',
            symbol: 'LUNA',
            name: 'Terra Luna',
            icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
            decimals: 6,
            coinGeckoID: 'terra-luna-2',
        },
    ],
    cw20Tokens: require('../../cw20/tokens/mainnet/terra2'),
    cw20Contracts: require('../../cw20/contracts/mainnet/terra2'),
    dexPairs: require('../../cw20/dex_pairs/mainnet/terra2'),
}
