const express = require('express');
const app = express();
const database = require('./database');
const { port } = require('./config');

async function getTables() {
  const tables = await database('information_schema.tables')
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
app.listen(port, () => {
  console.log(`Non-root server is running on http://localhost:${port}`);
});