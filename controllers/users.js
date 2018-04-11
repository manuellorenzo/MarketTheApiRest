'use strict'

var Users = require('../models/users');

//GET - Return all users in the DB
function findAllUsers(req, res) {
    Users.find(function (err, users) {
        if (err) return res.status(500).send({
            'code': 500,
            'error': err.message
        });
        res.status(200).jsonp({
            'code': 200,
            'users': users
        });
    });
};

//GET - Return a user with specified ID
function findUserById(req, res) {
    Users.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send({
            'code': 500,
            'error': err.message
        });
        res.status(200).jsonp({
            'code': 200,
            '_id': user._id,
            'username': user.username,
            'password': user.password,
            'email': user.email
        });
    });
};

function addUser(req, res) {
    console.log('POST');
    console.log(req.body);
    if (req.body.username != "" && req.body.password != "" && req.body.email != "") {
        var user = new Users({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });

        user.save(function (err, user) {
            if (err) return res.status(500).send({
                'code': 500,
                'error': err.message
            });
            res.status(200).jsonp({
                'code': 200,
                '_id': user._id,
                'username': user.username,
                'password': user.password,
                'email': user.email
            });
        });
    } else {
        return res.jsonp({
            'code': 500,
            'error': 'Empty fields'
        })
    }
};

function updateUser(req, res) {
    Users.findById(req.params.id, function (err, user) {
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        user.save(function (err) {
            if (err) return res.status(500).send({
                'code': 500,
                'error': err.message
            });
            res.status(200).jsonp({
                'code': 200,
                '_id': user._id,
                'username': user.username,
                'password': user.password,
                'email': user.email
            });
        });
    });
};

function deleteUser(req, res) {
    Users.findById(req.params.id, function (err, user) {
        user.remove(function (err) {
            if (err) return res.status(500).jsonp({
                'code': 500,
                'error': err.message
            });
            res.status(200).jsonp({
                'code': 200
            });
        })
    });
};

function login(req, res) {
    Users.findOne({
        'username': req.body.username,
        'password': req.body.password
    }, function (err, user) {
        if (!user) {
            return res.send({
                'code': 404
            });
        } else {
            user.code = 200;
            res.status(200).jsonp({
                'code': 200,
                '_id': user._id,
                'username': user.username,
                'password': user.password,
                'email': user.email
            });
        }
    });
}
module.exports = {
    findAllUsers,
    findUserById,
    addUser,
    updateUser,
    deleteUser,
    login
};