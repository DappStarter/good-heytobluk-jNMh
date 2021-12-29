require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food main royal spider unable hockey prize slot gaze'; 
let testAccounts = [
"0xe04f85ae147e55c7828a828c4de9097f66869947202e5d582affa4055fcb6f16",
"0x68e6555488f8038fc3f2c809956bdc42266b16cd0c6f3650f93ad83c7499b849",
"0x6cf63f7e1d81a35cc8c165b85735b1784b620220098a3ba0f814066f81a9a69b",
"0xc5b432e1d3f2db5712a024c9014abcf3181528d46d9ee11fb419694dcf8ce554",
"0x96f1e9d0372dc589e527a727707554eaf13d4954dff380b55cb818a720d4e026",
"0xeedd04262e8d51aebb8064236278ace9b25c5195ade6ddabb357a091ca43c7e9",
"0x363c83a6dc48bf60616b9de409d61c91a0418872314636aca37335b72438d119",
"0xf37e9dbf7726a7d2cf22083b0efa76adb881f318c985d92cf169396e95d87e92",
"0xe34af8699622366e7c0e60c6d2425eef1ebd32dac8e5185bf17cd644b685501b",
"0xd746ab032cf764897ac064d5a38a7fe60ae6cdf3be2387bb43754720dd9a1f4e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


