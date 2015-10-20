//require npm mods
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var logger = require('morgan')
var app = express()

var routes = require('./config/routes')

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000);
