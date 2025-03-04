const express = require('express');
const app = express();
const database = require('./database');
const { port } = require('./config');

app.get('/', async (req, res) => {
  const [rows] = await database.raw('SELECT VERSION() AS version');
  const version = rows[0].version;
  const message = `Hello from MySQL ${version}`;
  res.json({ message });
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Non-root server is running on http://localhost:${port}`);
});