const crypto = require('crypto');
const Room = require('../model/Room');

module.exports = {
    async index(request, response) {
        const data = await Room.find({});

        return response.json(data);
    },

    async create(request, response) {
        const {nome} = request.body;
        const user_id = request.headers.authorization;

        const room = {
            'nome': nome,
            'adm': user_id,
            'membros': [user_id]
        }
        console.log(room);
        const {_id} = await Room.create(room);
        console.log(_id);

        return response.json({_id});
    },

    async add_membro(request, response){
        const {user_id} = request.body;
        const {id} = request.params;
        const adm_id = request.headers.authorization;

        const room = await Room.findById(id);
        
        if(room.adm === adm_id){
            const update = await Room.update({'_id': id},{$push:{'membros': user_id}});
        }

        return response.json(room);

    },

    async put(request, response){
        return({message:"ok"});
    },

    async delete(request, response){
        const {id} = request.params;
        const adm_id = request.headers.authorization;

        const room = await Room.findById(id);

        if(room.adm != adm_id){
            return response.json("Usuario não altorizado!");
        }

        //add a remocao das contas vinculadas
        await Room.remove({'_id': id});

        return response.json("Remoção realizada com sucesso!");
    }
}