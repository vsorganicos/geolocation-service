'use strict';

const Good = require('good');
const Hapi = require('hapi');
const logic = require('./app/service');
const routes = require('./app/route');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route(routes);

server.register({
    register: Good,
    options: {
        reporters: 
            [{
                reporter: require('good-console'),
                events: {
                    response: '*',
                    log: '*'
                }
            }]
    }
}, function(err) {
    if(err) {
        throw err;
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});