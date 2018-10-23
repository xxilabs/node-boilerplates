'use strict'

const app = require('express')();
const routes = require('./routes');
const health = require('./routes/health');

// api routes
app.all( '/api/*', routes );
// common health
app.get( [ '/health', '/healthz' ], health );
// common 404
app.use( (req, res) => res.status( 404 ).send('Not Found') );

let server = app.listen( process.env.PORT, () => {
  console.log( `App listening on port ${ process.env.PORT }.` );
});

module.exports = server;
