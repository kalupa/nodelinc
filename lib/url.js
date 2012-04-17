var redis  = require('redis'),
		client = redis.createClient();
var sha1    = require('sha1');

client.on('error', function(err) {
	console.log("Error " + err);
});

var url = {
	uri: '',
	description: ''
};

exports.add = function(uri, description) {
	url.uri = uri;
	url.description = description;
	client.hmset( make_hash, JSON.stringify(url) );
	client.hgetall(make_hash);
};

exports.getDescription = function() {

};

make_hash = function() {
	return 'url_' + sha1(url.uri + url.description);
};
