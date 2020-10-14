const User = require('../model/User');

module.exports = {
    async login(request, response, next){
        const {email,password} = request.body;

        const morador = User.find({email,password});
        if(!morador){
            return response.json({message:"Email ou senha invalida"});
        }
        const id = morador._id;

        var token = jwt.sign({id}, 'ksadhfoihafgsdgfuguo345', {expiresIn: 300});
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
        
        jwt.verify(token, 'ksadhfoihafgsdgfuguo345', function(err, decoded) {
          if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          request.id = decoded.id;
          next();
        });
    }
}