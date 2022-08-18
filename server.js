// var http = require('http')
// var auth = require('basic-auth')
// var compare = require('tsscmp')
//
// // Create server
// var server = http.createServer(function (req, res) {
//   var credentials = auth(req)
//
//   // Check credentials
//   // The "check" function will typically be against your user store
//   if (!credentials || !check(credentials.name, credentials.pass)) {
//     res.statusCode = 401
//     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
//     res.end('Access denied. Please check you have the correct username and password.')
//   } else {
//    res.end("fy")
//   }
// })
//
// // Basic function to validate credentials for example
// function check (name, pass) {
//   var valid = true
//
//   // Simple method to prevent short-circut and use timing-safe compare
//   valid = compare(pass, process.env.PASSWORD) && valid
//   valid = compare(name, process.env.USER) && valid
//
//   return valid
// }
//
// // Listen
// server.listen(process.env.PORT || 3000)


var http = require('http');
var auth = require('basic-auth');
var app = require('express')();
var server = http.Server(app);

server.listen(process.env.PORT || 3000);

app.get('/', ensureCredentials, function(req, res){
  res.sendFile(path.resolve('index.html'));
})
app.all('*', function(req, res){
  res.redirect('/');
})
function ensureCredentials(req, res, next){
  var credentials = auth(req);
  if(!credentials || !check(credentials.name, credentials.pass)){
    res.status(403).send('Unauthorized')
  } else {
    next();
  }
}

function check (name, pass) {
  var valid = true

  // Simple method to prevent short-circut and use timing-safe compare
  valid = compare(pass, process.env.PASSWORD) && valid
  valid = compare(name, process.env.USER) && valid

  return valid
}
