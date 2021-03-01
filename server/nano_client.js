var NanoRPCClient = require('nano-node-rpc');

const dotenv = require('dotenv');
dotenv.config();

var client = new NanoRPCClient({
    url: process.env.NANO_NODE_HOST,
    //apiKey: process.env.MYNANONINJA_API_KEY,
});
//console.log(client.version);
module.exports = client;