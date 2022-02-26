/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('process', (table) => {
      table.increments("id");
      table.string("pname", 100).notNullable();
      table.integer("arr_time").notNullable();
      table.integer("exe_time").notNullable();
      table.integer("ser_time").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('process');
};
