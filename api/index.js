const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example GET endpoint
app.get('/products', (req, res) => {
  res.json({ message: 'This is the products endpoint' });
});

// Example POST endpoint
app.post('/products', (req, res) => {
  const newProduct = req.body;
  res.status(201).json(newProduct);
});

// Start the server (this line will not be used by Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Export the app for Vercel
module.exports = app;
