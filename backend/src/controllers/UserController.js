const connection = require('../database/connections');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json({users})
    },

    async create(request, response) {
        const { name, email, senha } = request.body;

        const [id] = await connection('users').insert({
            name,
            email,
            senha
        });
        
        return response.json({
          id, name
        })
    },

    async delete(request, response) {
        const id = request.headers.authorization;

        await connection('users').where('id', id).delete();
        
        return response.status(204).send();
    },

    async put(request, response) {
        const { name, email, senha } = request.body;

        
        return response.json({
          id, name
        })
    }

    
}