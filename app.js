const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(
    '<body style="background:black"><h2 style="color:white">Destiny is all</h2></body>'
  );
  res.end();
});

server.listen(5000, () => {
  console.log('Server is running on port 3000');
});
