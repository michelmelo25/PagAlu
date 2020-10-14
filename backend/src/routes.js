const express = require('express');
var jwt = require('jsonwebtoken');

const UserController = require('./controllers/UserController');
const RoomController = require('./controllers/RoomController');
const Authentication = require('./controllers/Authentication');

const routes = express.Router();

routes.post('/register', UserController.create);
routes.get('/users', Authentication.verifyJWT, UserController.index);

routes.post('/login', Authentication.login);
routes.post('/logout', Authentication.logout);


module.exports = routes;