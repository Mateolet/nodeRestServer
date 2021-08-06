const Server = require('./models/server');

require('dotenv').config(); //config para q tome todo



const server = new Server();



server.listen();


