
exports.up = function(knex) {
  return knex.schema.createTable('user_groups', function(table) {
    table.increments();
    table.string('name').notNullable();    
});
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_groups');
};
