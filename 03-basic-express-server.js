const express = require('express');
const app = express();

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
//app.set

app.get('/', function (req, res) {
  res.status(200).send('Home Page');
});

app.get('/about', function (req, res) {
  res.status(200).send('About Page');
});

app.get('/contact', function (req, res) {
  res.status(200).send('Contact Page');
});

app.all('*', function (req, res) {
  res.status(404).send('<h2>404 Page not found</h2>');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
