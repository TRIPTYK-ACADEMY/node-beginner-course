const Http = require('http');
const fs = require('fs');
const Path = require('path');

const server = Http.createServer( (req, response) => {
  
  console.log(`${req.method} : request for ${req.url}`);

  if(req.method === 'GET')
  {
    fs.readFile('./public/templates/index.html', 'UTF-8', (error, output) => {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(output);
    });
  }
  else if(req.method === 'POST')
  {
    let data = '';

    // Récupération des paquets de la requête
    req.on('data', (chunk) => {
      console.log(chunk);
      data += chunk;
    });

    // Renvoi d'une réponse quand tous les paquets ont été reçus
    req.on('end', () => {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(data);
    });
    
  }
});

server.listen(8001);

console.log('Node server listen port 8001 : http://localhost:8001');
