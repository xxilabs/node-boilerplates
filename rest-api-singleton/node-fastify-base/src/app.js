'use strict'

const fastify = require('fastify')();
const routes = require('./routes');
const health = require('./routes/health');

// common route handlers
fastify.get( '/health',  health.route );
fastify.register( routes, { prefix:'/api' } );

fastify.listen( process.env.PORT, '0.0.0.0' ).then(
  () => {
    console.log( `Server listening on port ${process.env.PORT}` )
  }
);

// export for tests
module.exports = fastify;
