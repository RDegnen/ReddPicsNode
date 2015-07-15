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

router.post('/gallery', function(req, res) {
  var subreddit = req.body.subreddit || req.query.subreddit;
  var sort = req.body.sort || req.query.sort;
  var window = req.body.window || req.query.window;
  var page = req.body.page || req.query.page;

  imgur.getGallery(subreddit, sort, window, page, function(err, imgurRes) {
    if (err) {
      throw err;
    }

    res.json(imgurRes);
  });
});

module.exports = router;
