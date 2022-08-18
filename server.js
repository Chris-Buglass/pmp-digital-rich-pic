var http = require('http')
var express = require('express');
var app = express();
var path = require('path');
var credentials = auth(req)
if (!credentials || !check(credentials.name, credentials.pass)) {
  res.statusCode = 401
  res.setHeader('WWW-Authenticate', 'Basic realm="example"')
  res.end('Access denied')
} else {
  res.end('Access granted')
}

function check (name, pass) {
  var valid = true

  // Simple method to prevent short-circut and use timing-safe compare
  valid = compare(name, 'john') && valid
  valid = compare(pass, 'secret') && valid

  return valid
}

app.use(express.static(__dirname)); // Current directory is root
//app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.listen(process.env.PORT || 5000);
console.log('Listening');
