const TronWeb = require('tronweb');
const CryptoUtils = require("../../client/src/utils/crypto");
const TransactionUtils = require("../../client/src/utils/transactionBuilder");
const fullNode = 'https://api.trongrid.io';
const solidityNode = 'https://api.trongrid.io';
const eventServer = 'https://api.trongrid.io/';
const privateKey = 'cf71d46cab0d13cdc450fa6855e8dd7c838769e41ac107bfc5ee0b5c217cf877';

function transferContractTx() {
    const token = "TRX";
    const fromAddress = CryptoUtils.pkToAddress(privateKey);
    const toAddress = "TLYPpyXepUJNneGFcXHtkb9cJdsvXahrcb";
    const amount = 1;	

    //let transaction = TransactionUtils.buildTransferTransaction(token, fromAddress, toAddress, amount);
    let frozen = TronWeb.transactionBuilder.freezeBalance(tronWeb.toSun(5), 3, "ENERGY", fromAddrress, toAddress);
    let signedTransaction = CryptoUtils.signTransaction(privateKey, frozen);
}

    /*
    const connected = !Object.entries(nodes).map(([name, connected]) => {
        if (!connected)
            console.error(`Error: ${name} is not connected`);

        return connected;
    }).includes(false);

    if (!connected)
        return;
   */
transferContractTx();
