const connection = require('../database/connections');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const rooms = await connection('rooms').select('*');
        const user_room = await connection('user_room').select('*');

        return response.json({
            rooms, user_room
        });
    },

    async create(request, response) {
        const { name } = request.body;
        const id_maker = request.headers.authorization;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('rooms').insert({id, name, id_maker});
        const id_room = id;
        const id_user = id_maker;
        await connection('user_room').insert({id_user, id_room});

        return response.json({
            id_user, id
        });
    },

    async add(request, response){
        const {id_room} = request.params;
        const id_user = request.headers.authorization;

        const result = await connection('user_room').where('id_user', id_user).where('id_room',id_room).first();
        
        if(result){
            return response.status(401).json({ error: 'User already exist.'})
        }

        const id_user_room = await connection('user_room').insert({id_user,id_room});

        return response.json({
            id_user, id_room, id_user_room
        });
    },

    async delete(request, response){
        const { id } = request.params;
        const id_user = request.headers.authorization;
        const result = await connection('rooms').where('id', id).select('id_maker').first();
        
         if(result.id_maker != id_user){
             return response.status(401).json({ error: 'Operation not permitted.'})
         }
        
        await connection('rooms').where('id', id).delete();
        await connection('user_room').where('id_room', id).delete();

        return response.status(204).send();
    }
}