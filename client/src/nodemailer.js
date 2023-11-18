var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('./nodemailer');

var app = express();
var server = http.Server(app);
var port = 5173;

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/main.jsx')));

//Routing
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/main.jsx'));
});
