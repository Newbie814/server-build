const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// setup static and middleware
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('<h2>404 Page not found</h2>');
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
