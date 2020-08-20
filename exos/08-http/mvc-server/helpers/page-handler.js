const fs = require('fs');

module.exports = (req, res, message) => {
  fs.readFile(`${process.cwd()}/views${req.url}`, 'UTF-8', (err, output) => {
    if(err) throw err;
    let result = output.replace(/{{MESSAGE}}/g, message);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(result);
  });
}