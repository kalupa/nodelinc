var redis  = require('redis'),
    client = redis.createClient(),
    sha1   = require('sha1');

client.on('error', function(err) {
  console.log("Error " + err);
});

function Url(uri, description) {
  var hash       = make_hash(uri, description);
  this.uri_hash  = "uri_" + hash;
  this.desc_hash = "desc_" + hash;

  client.set( this.uri_hash,  uri);
  client.set( this.desc_hash, description);
}
module.exports = Url;

Url.prototype.uri = function(callback) {
  client.get( this.url_hash, function(err, uri) {
    try {
      return callback( null, uri.toString() );
    }
    catch(err) {
      return callback(err);
    }
  });
};

Url.prototype.description = function(callback) {
  client.get( this.desc_hash, function(err, description) {
    try {
      return callback( null, description.toString() );
    }
    catch(err) {
      return callback(err);
    }
  });
};

//privates
function make_hash(url) {
  return sha1(url.uri + url.description) + "_url";
}

