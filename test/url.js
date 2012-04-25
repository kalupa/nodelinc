var should  = require('should'),
    redis   = require('redis'),
    client  = redis.createClient(),
    Url     = require('../lib/url.js');

describe('url', function() {
  var uri = 'http://example.com',
  desc    = 'this is a description';


  after(function(done) {
    client.keys('*', function(err, replies) {
      replies.forEach(function(reply, i) {
        client.del(reply);
      });
    });
    done();
  });

  describe('#new', function() {

    it('sets a uri', function(done) {
      var my_url = new Url(uri, desc);
      my_url.uri(function(err, subject) {
        should.not.exist(err);
        subject.should.equal(uri);
        done();
      });
    });

    it('sets a description', function(done) {
      var my_url = new Url(uri, desc);
      my_url.description(function(err, subject) {
        should.not.exist(err);
        subject.should.equal(desc);
        done();
      });
    });

  });

  //describe('#delete', function() {
  //it('removes a link');
  //});

});
