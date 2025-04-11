const express = require('express');
const requestLogger = require('./requestLogger');

const app = express();
const PORT = 4000;

// Global Middleware
app.use(requestLogger);

// Sample Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
