'use strict'

var express = require("express");
var app = express();
var cors = require('cors');

var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var mongoose = require('mongoose');
var UsersRoutes = require('./routes/users');
var MyWantsListsController = require('./routes/MyWantsLists');
var router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(router);

router.get('/', function (req, res) {
  res.send("Hello World!");
});

mongoose.connect('mongodb://localhost/users', function (err, res) {
  if (err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
  });
});

app.use('/users', UsersRoutes);
app.use('/myWants', MyWantsListsController);

module.exports = app;