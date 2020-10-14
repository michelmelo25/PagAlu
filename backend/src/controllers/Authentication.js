const User = require('../model/User');
const config = require('../config/config');
var jwt = require('jsonwebtoken');

module.exports = {
    async login(request, response, next){
        const {email,password} = request.body;

        const morador = User.find({email,password});
        if(!morador){
            return response.json({message:"Email ou senha invalida"});
        }
        const id = morador._id;

        var token = jwt.sign({id}, config.secret_key, {expiresIn: 300});
        token = 'Bearer '+token
        return res.json({ auth: true, token: token });
    },
    async logout(request, response, next){
        response.json({ auth: false, token: null});
    },
    async verifyJWT(request, response, next){
        var authorization = request.headers['Authorization'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
        
        const _,token = authorization.split(' ');
        
        jwt.verify(token, config.secret_key, function(err, decoded) {
          if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          request.id = decoded.id;
          next();
        });
    }
}