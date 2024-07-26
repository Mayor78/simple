const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello');
});

// Export the app for Vercel
module.exports = app;
