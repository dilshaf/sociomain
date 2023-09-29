const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle the root URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  } else if (req.url === '/about') {
    // Handle the '/about' URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page');
  } else {
    // Handle all other URLs with a 404 Not Found response
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});






