const express = require('express');
const app = express();
const database = require('./database');
const { port } = require('./config');

async function getVersion() {
  const [rows] = await database.raw('SELECT VERSION() AS version');
  const version = rows[0].version;
  const message = `Hello from MySQL ${version}`;
  console.log(message);
}

getVersion();

// Respond with "Hello" at the root path
app.get('/', (req, res) => {
  res.send('Hello from non-root container');
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Non-root server is running on http://localhost:${port}`);
});