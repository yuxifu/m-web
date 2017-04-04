// a minimum nodejs express web server

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var path = require('path');

/*

// if an incoming request uses a protocol other than HTTPS,
// redirect that request to the same url but with HTTPS
var forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  };
};

// instruct the app to use the forceSSL middleware
app.use(forceSSL());

*/

// parses urlencoded bodies
app.use(bodyParser.urlencoded({
  extended: false
}));

// send JSON responses
app.use(bodyParser.json());

// log requests to API using morgan 
app.use(logger('dev'));

// static contents
app.use(express.static(__dirname + '/dist'));

// all other routes should redirect to the index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// start listening
var port = process.env.PORT || 8080;
app.listen(port);
console.log("app listening on port " + port);
