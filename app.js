var express = require('express');
var app = express();
var redis = require('redis-url').connect(process.env.REDISTOGO_URL);

app.get('/', function(req, res) {
  res.type('text/plain');
  redis.get('text', function(err, value) {
     res.json({"value": value});
    res.json(value);
  });
});


app.post('/set/:text', function(req, res) {
  res.type('text/plain');
  if(!req.params.text) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  redis.set('text', req.params.text);
  res.json({"value": req.params.text});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


