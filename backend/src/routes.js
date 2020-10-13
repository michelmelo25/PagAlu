const express = require('express');

const UserController = require('./controllers/UserController');
const RoomController = require('./controllers/RoomController');

const routes = express.Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);
routes.put('/users', UserController.put);

routes.post('/rooms', RoomController.create);
routes.get('/rooms', RoomController.index);
routes.delete('/rooms/:id', RoomController.delete);
routes.post('/rooms/add/:id_room', RoomController.add);

module.exports = routes;