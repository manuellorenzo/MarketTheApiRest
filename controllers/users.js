'use strict'

var Users = require('../models/users');

//GET - Return all users in the DB
function findAllUsers(req, res) {
    Users.find(function (err, users) {
        if (err) res.send(500, err.message);
        console.log('GET /users')
        res.status(200).jsonp(users);
    });
};

//GET - Return a user with specified ID
function findUserById(req, res) {
    Users.findById(req.params.id, function (err, tvshow) {
        if (err) return res.send(500, err.message);
        console.log('GET /findUserById/' + req.params.id);
        res.status(200).jsonp(tvshow);
    });
};

function addUser(req, res) {
    console.log('POST');
    console.log(req.body);

    var user = new Users({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    user.save(function (err, user) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(user);
    });
};

function updateUser(req, res) {
    Users.findById(req.params.id, function (err, user) {
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        user.save(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).jsonp(user);
        });
    });
};

function deleteUser(req, res) {
    Users.findById(req.params.id, function (err, user) {
        user.remove(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};
module.exports = {
    findAllUsers,
    findUserById,
    addUser,
    updateUser,
    deleteUser
};