const Room = require('../model/Room');

module.exports = {
    async index(request, response) {
        const data = await Room.find({});

        return response.json(data);
    },

    async create(request, response) {
        const {andar,numero,custo} = request.body;

        const novoMorador = await Room.create({andar,numero,morador:"",custo});

        return response.json(novoMorador);
    },

    async put(request, response){
        return({message:"ok"});
    },

    async delete(request, response){
        return({message:"ok"});
    }
}