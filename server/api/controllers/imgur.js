'use strict';

var secrets = require('../../config/secrets.js');
var request = require('superagent');

var imgurApi = {
  getHomePage: function(cb) {
    var subredditArray = ['pics', 'historyporn', 'food', 'aww', 'wallpapers', 'carporn', 'space', 'sports', 'art', 'beerporn'];
    var randomSubreddit = subredditArray[Math.floor(Math.random() * subredditArray.length)];

    request
      .get("https://api.imgur.com/3/gallery/r/" + randomSubreddit)
      .set({
        Authorization: 'Client-ID ' + secrets.IMGUR_CLIENT_ID
      })
      .end(function(err, doc) {
        cb(err, doc);
      });
  }
};

module.exports = imgurApi;
