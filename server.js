const http = require('http');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

const port = argv.port || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./public/index.html', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

