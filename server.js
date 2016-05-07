'use strict'

var express = require('express');
var app = express();
var request = require('request');
var path = require('path');

app.set('views', __dirname + '/src');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var port = 4000;

console.log(' Starting server on port %d ', port);
//console.log(path.join(__dirname + '/template/css'));
app.use(express.static(path.join(__dirname + '/src')));
app.use(express.static(path.join(__dirname + '/build')));
// app.use(express.static(path.join(__dirname + '/src/template')));


app.listen(port);

console.log("port started");

app.get('/', function(req, res, next) {
    res.render('template/whatsExperiment.html');
	console.log("got your hit : refreshing");
});

app.get('/whatsThat', function(req, res, next) {
    res.render('template/practiceOther.html');
	console.log("got your hit : refreshing");
});

app.get('/healthy', function(req, res, next) {
    res.render('template/hk.html');
    console.log("got your hit : refreshing");
});