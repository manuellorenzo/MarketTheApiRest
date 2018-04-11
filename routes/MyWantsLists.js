'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var MyWantsListsController = require('../controllers/MyWantsLists');

// Llamamos al router
var api = express.Router();

// Creamos una ruta de tipo GET para el método de pruebas
api.get('/findMyWantsListById/:id', MyWantsListsController.findListById);
api.get('/findMyWantsListByIdUser/:id', MyWantsListsController.findListByIdUser);

api.post('/addMyWantsList', MyWantsListsController.addList);
api.put('/updateMyWantsList/:id', MyWantsListsController.updateList);

api.delete('/deleteMyWantsList/:id', MyWantsListsController.deleteList);
// Exportamos la configuración
module.exports = api;