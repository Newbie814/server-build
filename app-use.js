const express = require('express');
const app = express();
const logger = require('./logger-middleware.js');
const port = 5000;

// req => middleware => res

// app.use(logger);  //invokes on all routes

app.use('/api', logger); //invokes on all routes starting with /api

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
