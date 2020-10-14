const User = require('../model/User');
const Room = require('../model/Room');

module.exports = {
    async index(request, response) {
        const data = await User.find({});

        return response.json(data);
    },

    async create(request, response) {
        const {nome,email,password,andar,numero} = request.body;
        const morador = await User.find({email});
        const apartamento = await Room.find({andar,numero});
        if(morador){
            return response.json({message:"email já existe"});
        }
        if(apartamento){
            return response.json({message:"apartamento já alugado"});
        } 
        
        const novoMorador = await User.create({nome, email, password});

        const id = morador._id;

        const apartamentoAlugando = await Room.create({andar,numero,id});

        return response.json(novoMorador._id);
    },

    async delete(request, response) {
        return response.json({message:"ok"});
    },

    async put(request, response) {
        return response.json({message:"ok"});
    }
}