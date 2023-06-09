const express = require('express');
const app = express();
const port = 5000;
let { people } = require('./data.js');

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
