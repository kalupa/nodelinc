var url = require('../lib/url.js');

describe('url', function() {

	describe('#add', function() {
		var uri     = 'http://example.com',
				desc    = 'this is a description',
				subject = url.add(uri, desc);

		it('sets a uri', function() {
			subject.uri.should.equal(uri);
		});

		it('sets a description', function() {
			subject.description.should.equal(desc);
		});

	});

	describe('#delete', function() {
		it('removes a link');
	});

});
