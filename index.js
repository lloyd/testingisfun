var express = require('express'),
  fs = require('fs');

var port = process.env['PORT'] || 10000;

var app = express();

app.get('/.well-known/browserid', function(req, res) {
  res.type('application/json');
  res.send(200, '{"authority": "login.allizom.org"}');
});

app.listen(port, "127.0.0.1");
