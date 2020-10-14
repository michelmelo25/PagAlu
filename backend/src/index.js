const express = require('express');

const mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://devravache:20022002@pagalu.rkghc.mongodb.net/pagalu?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser());

const routes = require('./routes');

app.use(routes);

app.listen(3333);