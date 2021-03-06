var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

//helper vars & function to make rest of project quicker
var account1 = web3.eth.accounts[0]
var account2 = web3.eth.accounts[1]
var balance = (acct) => {return web3.fromWei(web3.eth.getBalance(acct),'ether').toNumber() }

//send eth
var txHash = web3.eth.sendTransaction({from:account1, to:account2, value:web3.toWei(1,'ether'),gasLimit:2100,gasPrice:20000000000})

//make var with hash
//var txHash = _

//get transaction
web3.eth.getTransaction(txHash)

//create private key var -- edit me
var pk1 = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3'
var EthTx = require("ethereumjs-tx")
var pk1x = new Buffer(pk1, 'hex')

//setup transaction data
var rawTx = {
  nonce: web3.toHex(web3.eth.getTransactionCount(account2)),
  to: account1,
  gasPrice: web3.toHex(20000000000),
  gasLimit: web3.toHex(21000),
  value: web3.toHex(web3.toWei(25, 'ether')),
  data: ""
}

//create new tx
var tx = new EthTx(rawTx)
//sign
tx.sign(pk1x)
//get signed transaction & set in a var
tx.serialize().toString('hex')
var sTx = tx.serialize().toString('hex')

//send raw transaction
web3.eth.sendRawTransaction(
'0x'+tx.serialize().toString('hex'), (error,data) => {
  if(!error) {console.log(data) } else {console.log(error)}
})

//check it worked
web3.eth.getTransaction(id)
