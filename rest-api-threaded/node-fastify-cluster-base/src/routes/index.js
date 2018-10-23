'use strict'

const basicRoute = require('./basic-route');
const basicPostRoute = require('./basic-post-route');

// See ../app.js for route prefix setting, currently /api/

module.exports = ( context, opts, next ) => {

  // register route handlers and schemas
  context.get( '/basic', basicRoute.route );
  context.post( '/basic', { schema:basicPostRoute.schema }, basicPostRoute.route );

  // continue
  next();

}
