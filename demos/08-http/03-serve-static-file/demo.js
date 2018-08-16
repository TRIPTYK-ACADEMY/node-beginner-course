const Http = require('http');
const Fs = require('fs');
const Path = require('path');

const server = Http.createServer( (req, res) => {

  console.log(req.method);
  console.log(req.url);

  if(req.url === '/')
  {
    Fs.readFile(`${process.cwd()}/views/index.html`, 'UTF-8', (err, output) => {
      if(err) console.log(err);
      res.writeHead(200, { 'Content-type' : 'text/html'});
      res.end(output);
    });
  }
  else if(req.url === '/about.html')
  {
    Fs.readFile(`${process.cwd()}/views/about.html`, 'UTF-8', (err, output) => {
      if(err) console.log(err);
      res.writeHead(200, { 'Content-type' : 'text/html'});
      res.end(output);
    });
  }
  else if(req.url.match(/.css$/))
  {
    let path_css = Path.join(__dirname, 'public', 'assets', 'css', req.url);
    let stream_css = Fs.createReadStream(path_css, 'UTF-8');

    res.writeHead(200, {'Content-type' : 'text/css'} );
    stream_css.pipe(res);
  }
  else if(req.url.match(/.js$/))
  {
    let path_js = Path.join(__dirname, 'public', 'assets', 'js', req.url);
    let stream_js = Fs.createReadStream(path_js, 'UTF-8');

    res.writeHead(200, {'Content-type' : 'text/javascript'} );
    stream_js.pipe(res);
  }
  else if (req.url.match(/.html$/)) {
    Fs.readFile(`${process.cwd()}/views/404.html`, 'UTF-8', (err, output) => {
      if(err) console.log(err);
      res.writeHead(200, { 'Content-type' : 'text/html'});
      res.end(output);
    });
  }
  else {
    res.end();
  }
});

server.listen(8001);
