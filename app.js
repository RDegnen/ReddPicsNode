// Server config
'use strict';

var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
require('./server/config/express')(app, express);

app.use('/', require('./server/routes'));

http.createServer(app)
  .listen((port), function() {
    console.log('Server listening on port ' + port);
});
