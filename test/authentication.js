require ('should');
var auth = require('../lib/authenticate.js');

describe('authentication', function() {
  describe('#verify', function() {
    it('logs the user in with good credentials', function() {
      var params  = { email: 'test@example.com', password: 'test' };
      var subject = auth.verify(params);

      subject.should.equal(true);
    });
    it('does not log in the user with missing credentials', function() {
      var params = {};
      var subject = auth.verify(params);

      subject.should.equal(false);
    });
  });
});
