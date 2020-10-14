const User = require('../model/User');
const config = require('../config/config');
var jwt = require('jsonwebtoken');

module.exports = {
    async login(request, response, next){
        const {email,password} = request.body;

        const morador = await User.find({email,password});
        if(!morador){
            return response.json({message:"Email ou senha invalida"});
        }
        const id = morador[0]._id;
        
        var token = jwt.sign({id}, config.secret_key, {expiresIn: 3000});
        token = 'Bearer '+token
        return response.json({ token: token, id:id});
    },
    async logout(request, response, next){
        response.json({ auth: false, token: null});
    },
    async verifyJWT(request, response, next){
        var authorization = request.headers['authorization'];
        
        if (!authorization){
            return response.status(401).json({ auth: false, message: 'No token provided.' });
        }
        const token = authorization.split(' ');
        jwt.verify(token[1], config.secret_key, function(err, decoded) {
          if (err) return response.status(501).json({ auth: false, message: 'Failed to authenticate token.' });
          
          request.id = decoded.id;
          
          next();
        });
    }
}