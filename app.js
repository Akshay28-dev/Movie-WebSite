var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var hbs = require('hbs');
var userRoutes = require('./routes/userRoutes');
var movieRoutes = require('./routes/movieRoutes');

var click = require('./click');

var app = express();

app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(userRoutes)
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(movieRoutes)

app.listen(1234)