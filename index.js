/* jshint node: true */
'use strict';

var Pouch = require('pouchdb');
var ExpressPouch = require('express-pouchdb')

module.exports = {
  name: 'bf-server',
  serverMiddleware: function(config) {
    var app = config.app;
    var options = config.options;
    var project = options.project;
    app.use('/db', ExpressPouch(Pouch));
  }
};
