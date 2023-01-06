# Hexxagon Chain Registry

This repository contains cosmos chains for use by Galaxy Station and related packages.

## Layout

```
chains
│
└───mainnet
│   │   Chains for mainnet.
│
└───testnet
│   │   Chains for testnet.
│
└───localterra
│   │   Chains for localterra.
│
cw20
│
└───tokens
│   │   Individual cw20 tokens.
│
└───contracts
│   │   Generic smart contracts.
│
└───dex_pairs
│   │   DEX pairs used mostly by Galaxy Station.
│
cw721
│
└───contracts
│   │   NFTs collections for display in Galaxy Station.
│
└───marketplaces
    │   List of open NFT marketplaces.
```

## Process for adding a new token, dex pair or contract

1. Fork this repository so you can make changes.
2. Make the desired changes in your own fork under the appropriate folder, then create a pull request for the changes.
3. Make sure to include a trailing comma on the items you are adding. This helps prevent merge conflicts in the future.
4. Please add your token or dex pair to the end of the tokens or dex pair object list. The build process will sort the list alphabetically by either protocol name, or name depending on the list.
5. Add a `coinGeckoID` to your token if its available, this will be CoinGekco's `API ID` for your token listing.

## Adding a new chain to Galaxy Station

1. Add your chains file under the `chains` folder and into the appropriate network folder (`mainnet` or `testnet`).
2. Add your chain name, chain ID. and any other relevant data to the `chains` file.
