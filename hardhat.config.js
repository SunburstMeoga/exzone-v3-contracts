require("@nomiclabs/hardhat-waffle");
console.log("Available networks:", module.exports.networks);
module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: {},
        hahTestnet: {
            url: 'https://rpc-testnet.hashahead.org',
            chainId: 71204,
            accounts: [`0x2db60b6144282af6fba8a7b8db05b268f5ed35d56b99c2be45a896f52cbc90a0`],
        }
    }
};

// 打印网络配置
console.log(module.exports.networks);
