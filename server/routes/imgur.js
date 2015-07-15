'use strict';

var express = require('express');
var router = express.Router();
var imgur = require('../api/controllers/imgur');

router.get('/index', function(req, res) {

  imgur.getHomePage(function(err, imgurRes) {
    if (err) {
      throw err;
    }

    res.json(imgurRes);
  });
});

module.exports = router;
