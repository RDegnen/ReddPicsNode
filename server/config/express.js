// Express config
'use strict';

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var config = function(app, express) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cookieParser());

};

module.exports = config;
