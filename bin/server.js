'use strict'
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = process.env.PORT || 49000;

app.set('port', port)

const server = http.createServer(app)

server.listen(port) // server.listen(port,_=>console.log('Listening on '+ port))
server.on('listening', onListening)
console.log('API Rodando na porta '+port);

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe '+addr : 'port '+addr;
    debug('Lintening on '+ bind);
}

// module.export = server;