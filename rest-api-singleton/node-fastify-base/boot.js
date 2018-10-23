'use strict'

// check for environment, if not, assume dev
if( process.env.NODE_ENV === 'development' ) {
  // require .env configuration
  require( 'dotenv' ).config();
}

// require application
module.exports = require( './src/app' );

process.on( 'unhandledRejection', (reason, promise) => {
  console.log( reason );
});
