// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    database: 'os-lab',
    user: 'admin',
    password: 'admin'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/db/migrations`
  },
  seeds: {
    directory: `${__dirname}/db/seeds`
  }
};
