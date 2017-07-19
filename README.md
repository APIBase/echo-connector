usage example (using the request module)
```json
var request = require('request');
var URL='http://johnsd.cse.unsw.edu.au:3000/data/ingest';
var TARGET_RESOURCE_TYPE = 'cvs';
var CSV = "sr,name,age,gender\n" +
  "1,rocky,33,male\n" +
  "2,jacky,22,male\n" +
  "3,suzy,21,female\n";
CSV = new Buffer(CSV).toString('base64');

request.post(URL, {
  json: true, {
    "connector": "01cf471c-a911-4a4d-a8e6-c07034b2251b",
    "dataSource": {
      "data": CSV,
      "options": {
        delimiter: ',',
        quote: '""'
      }
    },
    "targetResourceType": "csv"
  }
}, function(err, response, body) {
  process(body);
});
```
