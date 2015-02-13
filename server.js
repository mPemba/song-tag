var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var artistCtrl = require('./lib/controllers/artistCtrl.js');
var songCtrl = require('./lib/controllers/songCtrl.js');
var mongoUri = "mongodb://localhost:27017/song-tag";
var app = express();

mongoose.connect(mongoUri);
mongoose.connection.once("open", function() {
	console.log('connected to db at ' + mongoUri);
})

app.use(bodyParser.json());

app.listen(8000);

//artist endpoints
app.post('/artist', artistCtrl.post)
app.get('/artist', artistCtrl.get)

app.post('/song', songCtrl.post)
app.get('/song', songCtrl.get)
