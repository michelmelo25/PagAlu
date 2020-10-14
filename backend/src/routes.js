const express = require('express');

const UserController = require('./controllers/UserController');
const RoomController = require('./controllers/RoomController');
const Authentication = require('./controllers/Authentication');

const routes = express.Router();

routes.post('/register', UserController.create);
routes.get('/users', Authentication.verifyJWT, UserController.index);

routes.post('/login', Authentication.login);
routes.post('/logout', Authentication.logout);

routes.get('/room', Authentication.verifyJWT, RoomController.index);
routes.post('/room', Authentication.verifyJWT, RoomController.create);

module.exports = routes;