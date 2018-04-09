'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var UsersController = require('../controllers/users');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/findAllUsers', UsersController.findAllUsers);
 
// Exportamos la configuración
module.exports = api;