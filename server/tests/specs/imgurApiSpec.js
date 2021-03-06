'use strict';

var chai = require('chai');
var request = require('superagent');
var url = 'http://localhost:3000';

describe('Imgur API', function() {
  describe('API homepage call', function() {
    it('should respond with json', function(done) {
      request.get(url + '/imgur/index')
        .end(function(err, res) {
          if (err) {
            console.log(err);
          }
          chai.expect(res.body).to.exist;
          chai.expect(res.statusCode).to.equal(200);
          chai.expect(res).to.be.json;
          done();
        });
    });
  });

  describe('API gallery call', function() {
    it('should respond with json', function(done) {
      request.post(url + '/imgur/gallery')
        .send({
          subreddit: 'pics',
          sort: 'top',
          window: 'day',
          page: 1
        })
        .end(function(err, res) {
          if (err) {
            console.log(err);
          }
          chai.expect(res.body).to.exist;
          chai.expect(res.statusCode).to.equal(200);
          chai.expect(res).to.be.json;
          done();
        });
    });
  });
});
