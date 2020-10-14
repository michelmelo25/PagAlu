const User = require('../model/User');
const Room = require('../model/Room');
const { update } = require('../model/User');

module.exports = {
    async index(request, response) {
        const data = await User.find();
        return response.json(data);
    },

    async create(request, response) {
        const {nome,email,password} = request.body;
        const morador = await User.findOne({'email':email});

        if(morador){
            return response.json({message:"email já existe"});
        }
        
        const novoMorador = await User.create({nome, email, password});


        return response.json(novoMorador._id);
    },

    async delete(request, response) {
        const user_id = request.headers.authorization;

        const result = await User.remove({'_id': user_id});

        if(result.deletedCount > 0){
            return response.json("Usuario removido com sucesso!");
        }

        return response.json("Erro ao remover usuario!");
    },

    async put(request, response) {
        return response.json({message:"ok"});
    },

    async update(request, response) {
        const {nome,email,password} = request.body;
        const user_id = request.headers.authorization;
        const {id} = request.params;

        if(id == user_id){
            const result = await User.update({'_id': user_id},{$set: {'nome': nome, 'email': email, 'password': password}});
            if(result.nModified > 0){
                return response.json("Atualização realizada com sucesso");
            }else{
                return response.json("Usuario não cadastrado");
            }
        }

        return response.json("Operação não altorizada");
    }
}