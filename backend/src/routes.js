const express = require('express');

const UserController = require('./controllers/UserController');
const RoomController = require('./controllers/RoomController');
const Authentication = require('./controllers/Authentication');
const ContaController = require('./controllers/ContaController');

const routes = express.Router();

routes.post('/register', UserController.create);
routes.get('/users', UserController.index); //, Authentication.verifyJWT
routes.delete('/user', UserController.delete);
routes.put('/user/edit/:id', UserController.update);

routes.post('/login', Authentication.login);
routes.post('/logout', Authentication.logout);


routes.put('/room/:id', Authentication.verifyJWT, RoomController.add_membro);
routes.get('/rooms', Authentication.verifyJWT, RoomController.index); //, Authentication.verifyJWT
routes.post('/room', Authentication.verifyJWT, RoomController.create); //, Authentication.verifyJWT
routes.delete('/room/del/:id', Authentication.verifyJWT, RoomController.delete);

routes.post('/conta', ContaController.create);
routes.get('/contas', ContaController.index);
routes.get('/conta/:id', ContaController.get);

routes.get('/membros/:id', Authentication.verifyJWT, RoomController.indexMembros);

module.exports = routes;