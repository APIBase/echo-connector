var connector = require('./index.js');

var TARGET_RESOURCE_TYPE = 'cvs';
var CSV = "sr,name,age,gender\n" +
  "1,rocky,33,male\n" +
  "2,jacky,22,male\n" +
  "3,suzy,21,female\n";
CSV = new Buffer(CSV).toString('base64');

var SOURCE = {
  data: CSV,
  options: {
    delimiter: ',',
    quote: '""',
  },
 };

connector(SOURCE, TARGET_RESOURCE_TYPE, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
