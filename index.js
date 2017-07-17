var csvjson = require('csvjson');

module.exports = function(source, resourceType, cb) {
  var data = new Buffer(source.data, 'base64').toString('utf-8');
  var json = csvjson.toObject(data, source.options);
  cb(null, json);
};
