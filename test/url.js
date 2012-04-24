var url    = require('../lib/url.js'),
    should = require('should'),
    redis  = require('redis'),
    client = redis.createClient();

describe('url', function() {

  describe('#new', function() {
    var uri = 'http://example.com',
    desc    = 'this is a description',
    my_url  = {};

    beforeEach(function(done) {
      client.keys('*', function(err, replies) {
        replies.forEach(function(reply, i) {
          client.del(reply);
        });
      });
      my_url  = new url(uri, desc);
      done();
    });

    it('sets a uri', function(done) {
      my_url.uri(function(err, subject) {
        should.not.exist(err);
        subject.should.equal(uri);
        return done();
      });
    });

    it('sets a description', function(done) {
      my_url.description(function(err, subject) {
        should.not.exist(err);
        subject.should.equal(desc);
        return done();
      });
    });

  });

  //describe('#delete', function() {
    //it('removes a link');
  //});

});
