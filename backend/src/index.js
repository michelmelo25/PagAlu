const express = require('express');
const config = require('./config/config');

const mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://'+config.db.username+':'+config.db.password+'@'+config.db.db_name+'.rkghc.mongodb.net/'+config.db.db_name+'?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use((request,response,next)=>{
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser());

const routes = require('./routes');

app.use(routes);

app.listen(3333);