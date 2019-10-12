// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
      typeCast: function(field, next) {
    if (field.type == 'TINY' && field.length == 1) {
        return (field.string() == '1'); // 1 = true, 0 = false
    }
    return next();
}
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done) // turn on FK enforcement
      },
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/'
    },
    seeds:{
      directory: './data/seeds/'
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
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory:'./data/seeds'
    }
  }

};
