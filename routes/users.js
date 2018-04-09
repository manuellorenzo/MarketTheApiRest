'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var UsersController = require('../controllers/users');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/findAllUsers', UsersController.findAllUsers);
api.get('/findUserById/:id', UsersController.findUserById);

api.post('/addUser', UsersController.addUser);
api.post('/login', UsersController.login);
api.put('/updateUser/:id', UsersController.updateUser);

api.delete('/deleteUser/:id', UsersController.deleteUser);
// Exportamos la configuración
module.exports = api;