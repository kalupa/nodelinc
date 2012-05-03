var should  = require('should'),
    redis   = require('redis'),
    client  = redis.createClient(),
    Url     = require('../lib/url.js');

describe('url', function() {
  var
  uri    = 'http://example.com',
  desc   = 'this is a description';

  describe('#new', function() {
    var my_url = new Url(uri, desc);

    it('sets a uri', function(done) {
      my_url.uri(function(err, subject) {
        should.not.exist(err);
        subject.should.equal(uri);
        done();
      });
    });

    it('sets a description', function(done) {
      my_url.description(function(err, subject) {
        should.not.exist(err);
        subject.should.equal(desc);
        done();
      });
    });

  });

  describe('#delete', function() {
    it('removes a link', function(done) {
      my_ur.del(function(err, subject) {
        should.not.exist(err);
        subject.should.be.true;
      });
    });
  });

});
