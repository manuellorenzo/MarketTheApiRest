'use strict'

var MyWantsLists = require('../models/MyWantsLists');

//GET - Return a user with specified ID
function findListById(req, res) {
    MyWantsLists.findById(req.params.id, function (err, list) {
        if (err) return res.status(500).send({
            'code': 500,
            'error': err.message
        });
        res.status(200).jsonp({
            'code': 200,
            '_id': list._id,
            'idUser': list.idUser,
            'name': list.name,
            'cards': list.cards
        });
    });
};

function findListByIdUser(req, res) {
    MyWantsLists.find({
        'idUser': req.params.id
    }, function (err, lists) {
        if (err) return res.status(500).send({
            'code': 500,
            'error': err.message
        });
        return res.status(200).jsonp({
            'code': 200,
            'data': lists
        });
    });
};

function addList(req, res) {
    console.log('POST');
    console.log(req.body);
    var list = new MyWantsLists({
        'name': req.body.name,
        'idUser': req.body.idUser,
        'cards': req.body.cards
    });

    list.save(function (err, list) {
        if (err) return res.status(500).send({
            'code': 500,
            'error': err.message
        });
        res.status(200).jsonp({
            'code': 200,
            '_id': list._id,
            'idUser': list.idUser,
            'name': list.name,
            'cards': list.cards
        });
    });
};

function updateList(req, res) {
    MyWantsLists.findById(req.params.id, function (err, list) {
        list.name = req.body.name;
        list.cards = req.body.cards;
        list.save(function (err) {
            if (err) return res.status(500).send({
                'code': 500,
                'error': err.message
            });
            res.status(200).jsonp({
                'code': 200,
                '_id': list._id,
                'idUser': list.idUser,
                'name': list.name,
                'cards': list.cards,
                'status': 'updated'
            });
        });
    });
};

function deleteList(req, res) {
    MyWantsLists.findById(req.params.id, function (err, list) {
        list.remove(function (err) {
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

module.exports = {
    findListById,
    findListByIdUser,
    addList,
    updateList,
    deleteList,
};