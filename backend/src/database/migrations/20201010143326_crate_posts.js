
exports.up = function(knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments();
        table.string('messenger').notNullable();
        table.timestamp('date').notNullable().defaultTo(knex.fn.now());;
        table.integer('id_user').notNullable();
        table.integer('id_room').notNullable();

        table.foreign('id_user').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('id_room').references('id').inTable('rooms').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};