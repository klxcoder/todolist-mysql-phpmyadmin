const fs = require('fs');

const dbConfig = {
  client: 'mysql2',
  connection: {
    host: 'db',
    port: 3306,
    user: 'root',
    password: fs.readFileSync('/run/secrets/db_root_password', 'utf8'),
    database: 'tododb',
  },
}

const port = 3000

module.exports = {
  dbConfig,
  port,
}