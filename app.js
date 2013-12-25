var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');
  var a = "hey";
  res.json(a);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});