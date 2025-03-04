const database = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'root',
  },
});

module.exports = database