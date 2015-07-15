'use strict';

var express = require('express');
var router = express.Router();

router.use('/imgur', require('./imgur'));

router.get('/', function(req, res) {
  res.send('HEY THERE!');
});

module.exports = router;
