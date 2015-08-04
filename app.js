// Node.js application
//
// Setup:
// npm install
// gulp
//
// Run:
// node app.js
var express = require('express');

var app = express();

app.use(express.static('build'));

var server = app.listen(3000, function () {
  console.log('App is running on http://localhost:3000');
});