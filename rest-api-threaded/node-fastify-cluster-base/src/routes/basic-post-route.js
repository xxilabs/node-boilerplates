'use strict'

module.exports.schema = require('../schema/basic-post');

module.exports.route = ( req, res ) => {
  res.send( { 'Hello':req.body.name } );
}
