const Http = require('http');

const server = Http.createServer( (req, response) => {
  
  console.log(`${req.method} : request for ${req.url}`);

  const data = require('./public/files/list.json');
  
  if(req.url === '/')
  {
    response.writeHead(200, { 'Content-Type' : 'text/json' });
    //response.end(data);
    response.end(JSON.stringify(data));
  }
  else if(req.url === '/is-active')
  {
    let filter = data.filter( (item) => {
      return item.isActive === true;
    });
    response.writeHead(200, { 'Content-Type' : 'text/json' });
    response.end(JSON.stringify(filter));
  }

});

server.listen(8001);

console.log('Node server listen port 8001 : http://localhost:8001');
