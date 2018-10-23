'use strict'

const app = require('express')();
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const routes = require('./routes');
const health = require('./routes/health');

// routes
app.all( '/api/*', routes );
// common health
app.get( '/health', health );
// common 404
app.use( (req, res) => res.status( 404 ).send('Not Found') );

const listen = ( log ) => {
  return app.listen( process.env.PORT, () => {
      console.log( log );
  });
}

// use multiple workers
module.exports.cluster = () => {
  if( cluster.isMaster && numCPUs > 1 ) {
    for( let i = 0; i < numCPUs; i++ ) {
        cluster.fork();
    }
    console.log( `Master thread PID:${ process.pid }, starting clusters...` );
  } else {
    listen( `Worker thread PID:${ process.pid } started, port ${ process.env.PORT }`);
  }
}

// singleton for tests
module.exports.singleton = () => {
    return listen( `Server listening on port ${ process.env.PORT }.` );
}
