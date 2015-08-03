// Express config
'use strict';

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var fs = require('fs');
var logger = require('morgan');
var errorhandler = require('errorhandler');

var config = function(app, express) {

  app.all('/' ,function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cookieParser());

  app.use('/', require('../routes'));

  if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler());
  }

};

module.exports = config;
