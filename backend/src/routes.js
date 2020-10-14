const express = require('express');

const UserController = require('./controllers/UserController');
const RoomController = require('./controllers/RoomController');
const Authentication = require('./controllers/Authentication');
const AuthenticationAdmin = require('./controllers/AuthenticationAdmin');

const routes = express.Router();

routes.post('/register', UserController.create);
routes.get('/users', Authentication.verifyJWT, UserController.index);

routes.post('/login', Authentication.login);
routes.post('/logout', Authentication.logout);

routes.post('/admin/login', AuthenticationAdmin.login);
routes.post('/admin/logout', AuthenticationAdmin.logout);
routes.post('/admin/register', UserController.create);

routes.get('/room', AuthenticationAdmin.verifyJWT, RoomController.index);
routes.post('/room', AuthenticationAdmin.verifyJWT, RoomController.create);

module.exports = routes;