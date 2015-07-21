'use strict';

var express = require('express');
var router = express.Router();
var imgur = require('../api/controllers/imgur');
var NodeCache = require('node-cache');
var imgurCache = new NodeCache({stdTTL: 1200, checkperiod: 1400, useClones: false});

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
    var key = subreddit + sort + window + page;

    imgurCache.get(key, function(err, value) {
      if (err) {
        throw err;
      }

      if (value === undefined) {
        imgurCache.set(key, imgurRes, function(err, success) {
          if (err) {
            throw err;
          } else if (success) {
            console.log('Saved to cache!');
            res.json(imgurRes);
          }
        });
      } else {
        console.log('Retrieving from cache...');
        res.json(value);
        // console.log(value.req.path);
      }
    });
  });
});

module.exports = router;
