'use strict'

const request = require('supertest');
const should = require('should');

require('dotenv').config();
const app = require('../src/app').singleton();

describe( 'Common tests', () => {

  after( () => app.close() );

  it( 'should return 404 for /foo/bar', done => {
    request( app ).get( '/foo/bar' )
      .expect( 404 )
      .end( (err, res) => {
        res.status.should.equal( 404 );
        done();
      });
  });

  it( 'should return 200 for /health', done => {
    request( app ).get( '/health' )
      .expect( 200 )
      .end( (err, res) => {
        res.status.should.equal( 200 );
        res.body.status.should.equal( 'ok' );
        done();
      });
  });

});
