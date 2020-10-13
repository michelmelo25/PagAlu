
exports.up = function(knex) {
    return knex.schema.createTable('account', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.decimal('value').notNullable();
        table.integer('day').notNullable();
        table.integer('month').notNullable();
        table.integer('year').notNullable();

        table.integer('id_room').notNullable();

        table.foreign('id_room').references('id').inTable('rooms').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('account');
};
