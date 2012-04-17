var redis  = require('redis'),
		client = redis.createClient();

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
	return url;
};
