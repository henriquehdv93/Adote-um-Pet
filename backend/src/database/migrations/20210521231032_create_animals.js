
exports.up = function(knex) {
  return knex.schema.createTable('animals', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('data').notNullable();
      table.string('size');
      table.string('gender');
      table.string('age');
      table.string('description');
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('species_id').notNullable();
      table.foreign('species_id').references('id').inTable('species');
      table.integer('category_id').notNullable();
      table.foreign('category_id').references('id').inTable('categories');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('animals');
};
