'use strict'

const fastify = require('fastify')();
const routes = require('./routes');
const health = require('./routes/health');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

// common route handlers
fastify.get( '/health',  health.route );
fastify.register( routes, { prefix:'/api' } );

const listen = log => {
  fastify.listen( process.env.PORT, '0.0.0.0' )
  .then( () => console.log( log ) );
}

module.exports.cluster = () => {
  if( cluster.isMaster && numCPUs > 1 ) {
    for( let i = 0; i < numCPUs; i++ ) {
        cluster.fork();
    }
    console.log( `Master thread PID:${process.pid}, starting clusters...` );
  } else {
    listen( `Worker thread PID:${process.pid} listening on port ${ process.env.PORT }.` );
  }
}

module.exports.singleton = () => {
    listen( `Server listening on port ${ process.env.PORT }.` );
    return fastify;
}
