// Server config
'use strict';

var http = require('http');
var express = require('express');

var app = express();

// Express config
require('./server/config/express');

var server = http.createServer(app);

server.listen(3000);
