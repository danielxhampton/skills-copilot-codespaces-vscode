// create web server
// create a web server that responds to requests to /comments with a JSON string containing mock comments to represent a database

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