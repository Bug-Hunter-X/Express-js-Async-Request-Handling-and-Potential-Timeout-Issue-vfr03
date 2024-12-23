const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation (simulated with setTimeout)
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 5000); // Simulate a 5-second delay
}).on('error', (err) => {
  console.error('Request handler error:', err);
  res.status(500).send('Server error');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});