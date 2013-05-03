var express = require('express'),
  fs = require('fs'),
  https = require('https');

var options = {
  key: fs.readFileSync('./ssl/privatekey.pem'),
  cert: fs.readFileSync('./ssl/cert.pem')
};

// SSL port by default
var port = process.env['PORT'] || 443;
var app = express();
var server = https.createServer(options, app).listen(port, function() {
  console.log('testingisfun! server listening on port ' + port);
});

app.get('/', function(req, res) {
  res.type('application/json');
  res.send(200, '{"authority": "login.allizom.org"}');
});
