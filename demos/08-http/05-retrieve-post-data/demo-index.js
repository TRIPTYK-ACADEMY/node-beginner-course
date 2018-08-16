const Http = require('http');
const Fs = require('fs');

const server = Http.createServer( (req, response) => {
  
  console.log(`${req.method} : request for ${req.url}`);

  if(req.method === 'GET')
  {
    Fs.readFile('./views/index.html', 'UTF-8', (error, output) => {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(output);
    });
  }
  else if(req.method === 'POST')
  {
    let data = '';

    req.on('data', (chunk) => {
      console.log(chunk);
      data += chunk;
    });
    
    req.on('end', () => {
      response.writeHead(200, { 'Content-type' : 'text/html' });
      response.end(data);
    });
  }
});

server.listen(8001);

console.log('Node server listen port 8001 : http://localhost:8001');
