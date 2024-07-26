
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// In-memory storage for products
let products = [
  // Sample products
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    image: "https://example.com/product1.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 29.99,
    image: "https://example.com/product2.jpg"
  }
];

// GET endpoint to retrieve all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET endpoint to retrieve a single product by ID
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// POST endpoint to create a new product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1; // Simple ID assignment logic
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT endpoint to update a product by ID
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === parseInt(id));

  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// DELETE endpoint to delete a product by ID
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === parseInt(id));

  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
