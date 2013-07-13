var express = require('express');

var app = express.createServer(express.logger());

var fs; 

fs.readFileSync('/index', function (err, data) {
  if (err) throw err;
  console.log(data);
});

var string = data.toString();

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
