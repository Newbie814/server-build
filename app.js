const express = require('express');
const app = express();
const logger = require('./logger-middleware.js');
const authorize = require('./authorize-middleware.js');
const morgan = require('morgan');
const port = 5000;

// req => middleware => res

// app.use(logger);  //invokes on all routes

// app.use('/api', logger); //invokes on all routes starting with /api
app.use(morgan('tiny')); //third party middleware
// app.use([logger, authorize]); //invokes multiple middlewares on all routes. executed in order

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  console.log(req.user);
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
