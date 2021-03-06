'use strict';

var express = require('express');
var router = express.Router();
var imgur = require('../api/controllers/imgur');
var NodeCache = require('node-cache');
var imgurCache = new NodeCache({stdTTL: 1200, checkperiod: 1205, useClones: false});

router.get('/index', function(req, res) {

  imgur.getHomePage(function(err, imgurRes) {
    if (err) {
      throw err;
    }
    var parse = JSON.parse(imgurRes.text);
    res.json(parse);
  });
});

router.post('/gallery', function(req, res) {
  var subreddit = req.body.name || req.query.name;
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
            var parse = JSON.parse(imgurRes.text);
            res.json(parse);
          }
        });
      } else {
        console.log('Retrieving from cache...');
        var parse = JSON.parse(value.text);
        res.json(parse);
      }
    });
  });
});

module.exports = router;
