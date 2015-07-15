'use strict';

var chai = require('chai');

describe('Making sure gulp works', function() {
  describe('Math', function() {
    it('should return true', function(done) {
      chai.expect(2 + 2).to.equal(4);
      done();
    });
  });
});
