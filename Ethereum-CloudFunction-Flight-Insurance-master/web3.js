const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const provider = new HDWalletProvider("siren maid fancy field discover arch walk undo decline subway middle emerge", "https://sepolia.infura.io/v3/fb38ce94c0b04a78ac079bfa256e1443");

const web3 = new Web3(provider);

module.exports = web3;
