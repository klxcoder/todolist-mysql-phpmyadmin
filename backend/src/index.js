const express = require('express');
const app = express();

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'root',
    // database: 'myapp_test',
  },
});

async function getTables() {
  const tables = await knex('information_schema.tables')
    .select('table_name')
    .where('table_schema', 'your_database_name');
  console.log(tables.map(t => t.table_name));
}

getTables();


// Respond with "Hello" at the root path
app.get('/', (req, res) => {
  res.send('Hello from non-root container');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Non-root server is running on http://localhost:3000');
});