const Http = require('http');
const fs = require('fs');
const Path = require('path');

const server = Http.createServer( (req, response) => {
  
  console.log(`${req.method} : request for ${req.url}`);

  if(req.url === '/')
  {
    fs.readFile('./views/index.html', 'UTF-8', (error, output) => {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(output);
    });
  }
  else if(req.url.match(/.css$/))
  {
    let path_css = Path.join(__dirname, 'public', 'assets', 'css', req.url);
    let stream_css = fs.createReadStream(path_css, 'UTF-8');

    response.writeHead(200, { 'Content-Type' : 'text/css' });
    stream_css.pipe(response);
  }
  else if(req.url.match(/.js$/))
  {
    let path_js = Path.join(__dirname, 'public', 'assets', 'js', req.url);
    let stream_js = fs.createReadStream(path_js, 'UTF-8');

    response.writeHead(200, { 'Content-Type' : 'text/js' });
    stream_js.pipe(response);
  }
  else if(req.url.match(/.json$/))
  {

    const data = require(`./public/files/${req.url}`);

    response.writeHead(200, { 'Content-Type' : 'text/json' });
    response.end(JSON.stringify(data));
  }
});

server.listen(8001);

console.log('Node server listen port 8001 : http://localhost:8001');
