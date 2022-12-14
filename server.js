// var http = require('http')
// var auth = require('basic-auth')
// var compare = require('tsscmp')
// const path = require('path');
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
//
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

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, () => console.log(`Server listening`));
