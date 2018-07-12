const Http = require('http');

const server = Http.createServer( (request, response) => {
  response.writeHead(200, { 'Content-Type' : 'text/plain' });
  response.end('Node server created');
});

const server = Http.createServer( (request, response) => {
  let output = '';
  output += `
    <html>
      <head>
        <title></title>
      </head>
      <body>
      
      </body>
    </html>
  `;

  response.writeHead(200, { 'Content-Type' : 'text/html' });
  response.end('Node server created');
});

server.listen(8000);

console.log('Node server listen port 8000 : http://localhost:8000');

