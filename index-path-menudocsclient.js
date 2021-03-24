const MenuDocClient = require('./Structures/MenuDocsClient');
const config = require('../config.json'); 
//future change for config.json pending... 

const client = new MenuDocClient(config);
client.start();
