
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.integer('group_id').notNullable();
    table.foreign('group_id').references('id').inTable('user_groups');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('phone').notNullable();
    table.string('address_cep').notNullable();
    table.string('address_name').notNullable();
    table.string('address_number').notNullable();
    table.string('address_complement').notNullable();
    table.string('address_discrict').notNullable();
    table.string('address_city').notNullable();
    table.string('address_state').notNullable();
});
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
