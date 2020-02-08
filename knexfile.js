// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'webtokens',
      user: 'postgres',
      password: 'password',
      host: '127.0.0.1'
    },
    migrations: {
      directory: './data/migrations'
    },
  },

  testing: {
    client: 'pg',
    connection: {
      database: 'testing',
      user: 'postgres',
      password: 'password',
      host: '127.0.0.1'
    },
    migrations: {
      directory: './data/migrations'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
