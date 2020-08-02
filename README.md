# Poll system with Ethereum

## How to run

1. Clone this repository
2. Install angular dependencies with NPM
3. Install Ganache (https://www.trufflesuite.com/ganache) on your PC and execute
4. Install Metamask extension on Firefox or Chrome
5. Configure Metamask to use localhost (Ganache) and import account from Ganache using private key
6. Deploy the smart contract (contact.sol) (You can use https://remix.ethereum.org on the web choosing Web3Provider)
7. Change the value of the contract address variable in the web3.service file, with the new address generate after deploying the contract on Ganache
8. Run angular app

Note: If you modify the contract, do not forget to modify the contractABI.json file with the new ABI

## License

Feel free to use this code. Enjoy!
