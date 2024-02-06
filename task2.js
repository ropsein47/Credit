const {Web3} = require('web3')
const readline = require('readline-sync')
const fs = require('fs')

async function main() {
    let web3 = new Web3('http://127.0.0.1:7545')

    let account = web3.eth.accounts.privateKeyToAccount('0x3716dea809d5c7a7b0ae25dd377ee504062fe6ba8d4c866ba4af3300a704e241')
    // deploying wallet contract
    const ABI = JSON.parse(fs.readFileSync(__dirname + '\\deploy' + '\\' + 'Credit.abi', 'utf-8'))
    const bytecode = fs.readFileSync(__dirname + '\\deploy' + '\\' + 'Credit.bin', 'utf-8')

    
    let creditContract = new web3.eth.Contract(ABI)

    await creditContract.deploy({data: bytecode, arguments: [5]})
    .send({
        from: account.address,
        gas: 5_000_000,
        value: 10_000_000_000_000_000_000
    })
    // .on(('transactionHash'), (transactionHash) => console.log(transactionHash))
    // .then((newContractInstance) => (walletContract = newContractInstance))

    console.log(walletContract)

    const functionNames = walletContract.options.jsonInterface
    .filter(interfaceItem => interfaceItem.type === "function")
    .map(interfaceItem => interfaceItem.name);

    for(let i = 0; i < functionNames.length; i++){
        console.log( i+1 + ') ' + functionNames[i])
    }
//     //deploying bank contract
//     ABI = JSON.parse(fs.readFileSync(__dirname + '\\deploy' + '\\' + 'Bank.abi', 'utf-8'))
//     bytecode = fs.readFileSync(__dirname + '\\deploy'+ '\\' + 'Bank.bin', 'utf-8')

//     let bankContract = new web3.eth.Contract(ABI)

//     eGas  =await bankContract.deploy({data:bytecode})
//     .estimateGas({
//         from:account.address,
//         gas: 10_000_000
//     })

//     console.log('Gas used: ' + eGas)
//     await bankContract.deploy({data: bytecode})
//     .send({
//         from: account.address,
//         gas: eGas
//     })
//     .on(('transactionHash'), (transactionHash) => console.log(transactionHash))
//     .then((newContractInstance) => (bankContract = newContractInstance))

//     //deploying credit contract
//     ABI = JSON.parse(fs.readFileSync(__dirname + '\\deploy' + '\\' + 'Credit.abi', 'utf-8'))
//     bytecode = fs.readFileSync(__dirname + '\\deploy'+ '\\' + 'Credit.bin', 'utf-8')

//     let creditContract = new web3.eth.Contract(ABI)

//     eGas = awaitcreditContract.deploy({data:bytecode, arguments: [5]})
//     .estimateGas({
//         from:account.address,
//         gas: 10_000_000_000
//     })

//     console.log('Gas used: ' + eGas)
//     await creditContract.deploy({data: bytecode, arguments: [5]})
//     .send({
//         from: account.address,
//         gas: eGas,
//         value: 1_000_000_000_000_000_000
//     })
//     .on(('transactionHash'), (transactionHash) => console.log(transactionHash))
//     .then((newContractInstance) => (creditContract = newContractInstance))

//     // searching for function names
//    const functionNames = creditContract.options.jsonInterface
//    .filter(interfaceItem => interfaceItem.type === "function")
//    .map(interfaceItem => interfaceItem.name);

//    for(let i = 0; i < functionNames.length; i++){
//     console.log( i+1 + ') ' + functionNames[i])
//  }
          
}

main()