const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");
const fs = require("fs");

const provider = new HDWalletProvider(
  "siren maid fancy field discover arch walk undo decline subway middle emerge",
  "https://sepolia.infura.io/v3/fb38ce94c0b04a78ac079bfa256e1443"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: "5000000", from: accounts[0] });

  console.log(JSON.stringify(abi));
  fs.writeFileSync("./abi_updated", JSON.stringify(abi));
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
