'use strict'

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
var mongoose = require('mongoose');
var UsersRoutes = require('./routes/users');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {
    res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://localhost/users', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});

app.use('/api',UsersRoutes);

module.exports = app;
