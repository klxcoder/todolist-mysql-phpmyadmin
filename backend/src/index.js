const express = require('express');
const app = express();

// Respond with "Hello" at the root path
app.get('/', (req, res) => {
  res.send('Hello from non-root container');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Non-root server is running on http://localhost:3000');
});