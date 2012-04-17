var auth = require('../lib/authenticate.js');

describe('authentication', function() {
  describe('#verify', function() {

    it('logs in the user with good credentials', function() {
      var params  = { email: 'test@example.com', password: 'test' };
      auth.verify(params).should.equal(true);
    });

    it('does not log in the user with incorrect credentials', function() {
      var params = {email: 'bad', password: 'bad'};
      auth.verify(params).should.equal(false);
    });

  });
});
