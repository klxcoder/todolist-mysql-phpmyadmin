const databaseConnectionObject = {
  client: 'mysql2',
  connection: {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'root',
  },
}

const port = 3000

module.exports = {
  databaseConnectionObject,
  port,
}