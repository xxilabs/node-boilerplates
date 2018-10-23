'use strict'

// check for environment, if not, assume dev
if( process.env.NODE_ENV === 'development' ) {
  // require .env configuration
  require( 'dotenv' ).config();
}

// run application
require( './src/app' ).cluster();

process.on( 'unhandledRejection', (reason, promise) => {
  console.log( reason );
});
