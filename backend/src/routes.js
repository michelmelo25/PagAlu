const express = require('express');

const UserController = require('./controllers/UserController');
const RoomController = require('./controllers/RoomController');
const Authentication = require('./controllers/Authentication');

const routes = express.Router();

routes.post('/register', UserController.create);
routes.get('/users', Authentication.verifyJWT, UserController.index);

routes.post('/login', Authentication.login);
routes.post('/logout', Authentication.logout);

routes.get('/rooms', RoomController.index);
routes.post('/room', RoomController.create);
routes.post('/room/:id', RoomController.add_membro);

module.exports = routes;