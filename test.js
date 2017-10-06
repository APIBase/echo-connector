var connector = require('./index.js');
var TARGET_RESOURCE_TYPE = "*";
var SOURCE = {
  "name": "test obj",
  "data": 123
};
connector(SOURCE, TARGET_RESOURCE_TYPE, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
