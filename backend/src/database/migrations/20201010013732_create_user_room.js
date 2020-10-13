
exports.up = function(knex) {
    return knex.schema.createTable('user_room', function (table) {
        table.increments();
        table.string('id_user').notNullable();
        table.string('id_room').notNullable();

        table.foreign('id_user').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        table.foreign('id_room').references('id').inTable('rooms').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_room');
};