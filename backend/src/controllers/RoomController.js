const crypto = require('crypto');
const Conta = require('../model/Conta');
const Room = require('../model/Room');

module.exports = {
    //index lista todas as salas
    async index(request, response) {
        const data = await Room.find({'membros':request.id});
        //const data = await Room.findOne({'adm':request.id});
        //console.log(request.id)
        return response.json(data);
    },

    async create(request, response) {
        const {nome} = request.body;
        const id= request.id;

        const {_id} = await Room.create({nome:nome, adm:id, membros:[id]});

        return response.json({_id});
    },

    async add_membro(request, response){
        const {user_id} = request.body;
        const {id_room} = request.params;
        const adm_id = request.id;

        const room = await Room.findById(id_room);
        
        if(room.adm === adm_id){
            const update = await Room.updateOne({'_id': id},{$push:{'membros': user_id}});
        }else{
            return response.json({message:"acesso negado"})
        }

        return response.json(room);

    },

    async put(request, response){
        return({message:"ok"});
    },

    async delete(request, response){
        const {id} = request.params;
        const adm_id = request.id;

        const room = await Room.findById(id);

        if(room.adm != adm_id){
            return response.json("Usuario não altorizado!");
        }
        //Remove as contas cadastradas nessa room
        await Conta.remove({'_id':room.contas});
        //Remove a room
        await Room.remove({'_id': id});


        return response.json("Remoção realizada com sucesso!");
    }
}