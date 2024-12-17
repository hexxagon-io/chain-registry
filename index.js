const glob = require('glob-promise');
const path = require('path');
const axios = require('axios');
const { Buffer } = require('buffer');
const { Hash } = require('@keplr-wallet/crypto');
const { AccAddress } = require('@hexxagon/feather.js');
const fs = require('fs').promises;

;(async () => {
    // create build directory
    fs.mkdir('./build', { recursive: true });

    // convert chains to json
    const chains = {};
    const chains2 = {};
    const chainsOutPath = './build/chains.json';
    const chains2OutPath = './build/chains2.json';

    const chainFiles = await glob('./chains/*/*.js');
    const tokens = [];
    const cw20Contracts = [];
    const dexPairs = [];
    const nftContracts = [];


    await Promise.all(
        chainFiles.map(async (file) => {
            const [_, folder, network, fileName] = file.split('/');
            const filenameWithoutExtension = path.basename(file, path.extname(file));

            if (typeof chains[network] === 'undefined') {
                chains[network] = {};
                chains2[network] = {};
            }

            const fullPath = `./${file}`;
            const chainData = require(fullPath);            

            if (network !== 'localterra' && !isValidUrl(chainData.lcd)) {
                console.log(`${chainData.chainID}: Invalid LCD URL: ${chainData.lcd}`);
                return;
            }

            tokens.push(
                ...(chainData.tokens ?? []).map((t) => ({
                    ...t,
                    chainID: chainData.chainID,
                    network,
                }))
            );

            tokens.push(
                ...(chainData.cw20Tokens ?? []).map((t) => ({
                    ...t,
                    chainID: chainData.chainID,
                    network,
                }))
            );

            cw20Contracts.push(
                ...(chainData.cw20Contracts ?? []).map((t) => ({
                    ...t,
                    chainID: chainData.chainID,
                    network,
                }))
            );

            dexPairs.push(
                ...(chainData.dexPairs ?? []).map((t) => ({
                    ...t,
                    chainID: chainData.chainID,
                    network,
                }))
            );

            nftContracts.push(
                ...(chainData.nftContracts ?? []).map((t) => ({
                    ...t,
                    chainID: chainData.chainID,
                    network,
                }))
            );

            const version = await getSDKVersion(chainData.lcd);
            if (version) chainData.version = version;

            delete chainData['tokens'];
            delete chainData['cw20Tokens'];
            delete chainData['cw20Contracts'];
            delete chainData['dexPairs'];
            delete chainData['nftContracts'];

            const gasPrices = Object.fromEntries(
                await Promise.all(
                    Object.entries(chainData.gasPrices).map(async ([key, value]) => {
                        if (typeof value === 'number') {
                            return [key, value];
                        } else {
                            if (value.type === 'OSMOSIS') {
                                try {
                                    const { data } = await axios.get(value.url, {
                                        baseURL: chainData.lcd,
                                    });
                                    return [key, Number(data.base_fee) * value.adjustment];
                                } catch (e) {
                                    console.error(e);
                                    console.error(
                                        `Failed to get the gas price from ${value.url} on ${chainData.lcd}`
                                    );
                                    return [key, value.defaultValue];
                                }
                            }
                        }
                    })
                )
            );

            chains[network][chainData.chainID] = { ...chainData, gasPrices };
            chains2[network][filenameWithoutExtension] = { ...chainData, gasPrices };
        })
    );

    // Write out chains.json
    await fs.writeFile(chainsOutPath, JSON.stringify(chains, null, 2));

    // Write out chainsByName.json
    await fs.writeFile(chains2OutPath, JSON.stringify(chains2, null, 2));

    console.log('Successfully built chains JSON files.');

})()

function calculateIBCDenom(channel, denom) {
    return (
        'ibc/' +
        Buffer.from(Hash.sha256(Buffer.from(`transfer/${channel}/${denom}`)))
            .toString('hex')
            .toUpperCase()
    );
}

function isValidUrl(url) {
    try {
        return new URL(url).protocol === 'https:';
    } catch (e) {
        return false;
    }
}

const getSDKVersion = async (lcd) => {
    if (lcd.includes('localhost')) return 0.46;

    try {
        const response = await axios.get(`${lcd}/node_info`);
        if (response.status === 200) {
            let version = response.data.application_version.cosmos_sdk_version;
            version = version.substring(1);
            version = version.split('.').slice(0, 2).join('.');
            return parseFloat(version);
        }
    } catch (error) {
        console.error(`Failed to get the SDK version from ${lcd} using /node_info, error: ${error.message}`);
        try {
            const response = await axios.get(`${lcd}/cosmos/base/tendermint/v1beta1/node_info`);
            if (response.status === 200) {
                let version = response.data.application_version.cosmos_sdk_version;
                version = version.substring(1);
                version = version.split('.').slice(0, 2).join('.');
                return parseFloat(version);
            }
        } catch (error) {
            console.error(`Failed to get the SDK version from ${lcd} using /cosmos/base/tendermint/v1beta1/node_info, error: ${error.message}`);
            try {
                const response = await axios.get(`${lcd}/cosmos/gov/v1/proposals?pagination.limit=1`);
                if (response.status === 200) {
                    return 0.46;
                }
            } catch (error) {
                console.error(`Failed to get the SDK version from ${lcd} using /cosmos/gov/v1/proposals, error: ${error.message}`);
                return 0.45;
            }
        }
    }
};
