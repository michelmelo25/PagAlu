const User = require('../model/User');
const Room = require('../model/Room');

module.exports = {
    async index(request, response) {
        const data = await User.find({});

        return response.json(data);
    },

    async create(request, response) {
        const {nome,email,password} = request.body;
        const morador = await User.find({email});
        if(morador){
            return response.json({message:"email já existe"});
        }
        
        const novoMorador = await User.create({nome, email, password});


        return response.json(novoMorador._id);
    },

    async delete(request, response) {
        return response.json({message:"ok"});
    },

    async put(request, response) {
        return response.json({message:"ok"});
    }
}