const fs = require('fs');

module.exports = (req, res, status) => {
  fs.readFile(`${process.cwd()}/views${req.url}`, 'UTF-8', (err, result) => {
    if(err) throw error;
    res.writeHead(status, { 'Content-type' : 'text/html' });
    res.end(result);
  });
};