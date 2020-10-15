const crypto = require('crypto');
const Conta = require('../model/Conta');
const Room = require('../model/Room');

module.exports = {
    //index lista todas as salas
    async index(request, response) {
        //const data = await Room.find();
        const data = await Room.findOne({'adm':request.id});
        console.log(request.id)
        return response.json(data);
    },

    async create(request, response) {
        const {nome,custo,id} = request.body;

        const room = {
            'nome': nome,
            'adm': user_id,
            'membros': [user_id]
        }
        const {_id} = await Room.create(room);

        return response.json({_id});
    },

    async add_membro(request, response){
        const {user_id} = request.body;
        const {id} = request.params;
        const adm_id = request.headers.authorization;

        const room = await Room.findById(id);
        
        if(room.adm === adm_id){
            const update = await Room.updateOne({'_id': id},{$push:{'membros': user_id}});
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
        //problema na remocao das contas vinculadas
        //await Conta.removeListener(room.contas);
        //await Room.remove({'_id': id});


        return response.json("Remoção realizada com sucesso!");
    }
}