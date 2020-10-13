
exports.up = function(knex) {
    return knex.schema.createTable('rooms', function (table) {
        table.string('id').primary();
        table.string('name').notNullable(); 
        table.string('id_maker').notNullable(); 

        table.foreign('id_maker').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('rooms');
};
