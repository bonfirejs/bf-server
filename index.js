/* jshint node: true */
'use strict';

var express  = require('express');
var Pouch = require('pouchdb');
var ExpressPouch = require('express-pouchdb');
var mkdirp = require('mkdirp');

module.exports = {
  name: 'bf-server',
  serverMiddleware: function(config) {
    var app = config.app;
    var options = config.options;
    var project = options.project;
    var expressApp = express();
    var pouchApp = ExpressPouch();
    mkdirp('.pouch/');
    pouchApp.setPouchDB(Pouch.defaults({prefix: '.pouch/'}));
    expressApp.use(pouchApp);
    expressApp.listen(5984, '127.0.0.1');
    console.log('PouchDB server at http://localhost:5984/');
  }
};
