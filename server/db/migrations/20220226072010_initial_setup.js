/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('process', (table) => {
      table.increments("id");
      table.integer("arrTime").notNullable();
      table.integer("exeTime").notNullable();
      table.integer("serTime").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('process');
};
