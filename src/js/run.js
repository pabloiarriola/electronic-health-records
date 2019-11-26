var Web3 = require('web3');
var fs = require('fs');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var acc = web3.eth.accounts;
var code = fs.readFileSync('/Users/pablo/Documents/test/contracts/Agent.sol').toString();
var solc = require('solc');
var compiledCode = solc.compile(code);
var abiDefinition = JSON.parse(compiledCode.contracts[':Agent'].interface);
var AgentContract = web3.eth.contract(abiDefinition);
var byteCode = compiledCode.contracts[':Agent'].bytecode;
var deployedContract = AgentContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
var contractInstance = AgentContract.at(deployedContract.address);
console.log(compiledCode.contracts[':Agent'].interface);
deployedContract.address;
