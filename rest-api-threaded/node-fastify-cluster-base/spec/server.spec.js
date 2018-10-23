'use strict'

const request = require('supertest');
const should = require('should');

require('dotenv').config();
const app = require('../src/app').singleton();

describe('Common tests', () => {

  after( () => app.server.close() );

  it('should return 404 for /foo/bar', function( done ) {
    request( app.server ).get( '/foo/bar' )
    .expect( 404 )
    .end( (err, res) => {
        if (err) throw err;
        res.status.should.equal( 404 );
        done();
    });
  });

  it('should return 200 for /health', function( done ) {
    request( app.server ).get( '/health' )
    .expect( 200 )
    .end( (err, res) => {
        if (err) throw err;
        res.status.should.equal( 200 );
        res.body.status.should.equal( 'ok' );
        done();
    });
  });

});
