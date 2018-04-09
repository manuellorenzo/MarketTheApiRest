'use strict'

var Users = require('../models/users');

//GET - Return all users in the DB
function findAllUsers(req, res) {
	Users.find(function(err, users) {
    if(err) res.send(500, err.message);
    console.log('GET /users')
		res.status(200).jsonp(users);
	});
};

module.exports = {
    findAllUsers
};