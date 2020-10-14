const express = require('express');

const UserController = require('./controllers/UserController');
const RoomController = require('./controllers/RoomController');
const Authentication = require('./controllers/Authentication');

const routes = express.Router();

routes.post('/register', UserController.create);
routes.get('/users', UserController.index); //, Authentication.verifyJWT
routes.delete('/user', UserController.delete);
routes.put('/user/edit/:id', UserController.update);

routes.post('/login', Authentication.login);
routes.post('/logout', Authentication.logout);


routes.put('/room/:id', RoomController.add_membro);
routes.get('/rooms', Authentication.verifyJWT, RoomController.index);
routes.post('/room', Authentication.verifyJWT, RoomController.create);


module.exports = routes;