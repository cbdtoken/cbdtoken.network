const HttpProvider = TronWeb.providers.HttpProvider;

const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = 'https://api.trongrid.io/';

const app = async () => {

    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer
       // privateKey
    );

    if (!connected)
        return;



};

app();
