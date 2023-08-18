// Create web server
var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify([
    { "author": "Pete Hunt", "text": "This is one comment" },
    { "author": "Jordan Walke", "text": "This is *another* comment" }
  ]));
});

app.listen(3000);