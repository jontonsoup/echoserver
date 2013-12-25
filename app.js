var express = require('express');
var app = express();
var redis = require('redis-url').connect(process.env.REDISTOGO_URL);

app.get('/', function(req, res) {
  res.type('text/plain');
  redis.get('text', function(err, value) {
    res.json({"value": value});
  });
});


app.post('/set/:text', function(req, res) {
  res.type('text/plain');
  redis.set('text', req.params.text);
  res.json({"value": req.params.text});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


