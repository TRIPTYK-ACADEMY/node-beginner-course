const Http = require('http');

const server = Http.createServer( (request, response) => {
  let output = '';
  output += `
    <html>
      <head>
        <title>The last one page of the internets</title>
      </head>
      <body>
        <h1>Title h1</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <h2>Title h2</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </body>
    </html>
  `;

  response.writeHead(200, { 'Content-Type' : 'text/html' });
  response.end('Node server created');
});

server.listen(8001);

console.log('Node server listen port 8001 : http://localhost:8001');