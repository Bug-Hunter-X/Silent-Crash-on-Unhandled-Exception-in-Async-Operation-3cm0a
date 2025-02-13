const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    try {
      if (req.url === '/error') {
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
      }
    } catch (err) {
      console.error('Unhandled exception:', err);
      process.exit(1);
    }
  }, 100);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});