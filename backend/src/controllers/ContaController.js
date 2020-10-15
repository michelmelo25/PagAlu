const Conta = require('../model/Conta');
const Room = require('../model/Room');

module.exports = {
    async index(request, response) {
        const contas = await Conta.find();

        return response.json(contas);
    },

    async get(request, response) {
        const {id} = request.params;
        const user_id = request.headers.authorization;
        const rooms = await Room.find({"membros": user_id});

        rooms.forEach(async function(room){
            if(room.contas.includes(id)){
                const conta = await Conta.findById(id);
                return response.json(conta);
            }
        });

        //return response.json("Operação não altorizada");
    },

    async create(request, response) {
        const {nome, valor, vencimento} = request.body;
        const room_id = request.headers.room;
        const [dia, mes, ano] = vencimento.split("/");
        const data = new Date(ano,mes-1,dia);
        //o javascrip interpreta os meses de 0 a 11, respectivamente
        const conta = await Conta.create({nome, valor, "vencimento":data});
        await Room.updateOne({'_id': room_id},{$push: {'contas': conta._id}});

        return response.json("Conta criada!");
    },

    async update(request, response) {
        const {nome, valor, vencimento} = request.body;
        const room_id = request.headers.room;
        const conta_id = request.headers.conta;
        const [dia, mes, ano] = vencimento.split("/");
        const data = new Date(ano,mes-1,dia);
        const conta = await Conta.updateOne({'_id': conta_id},{$push:{nome, valor, "vencimento":data}});

        return response.json("Conta Atualizada!");
    },
    
    async delete(request, response) {
        const conta_id = request.headers.conta;
        const result = await Conta.remove({'_id': conta_id});
        console.log(result);
        return response.json("Deletado");
    }
}