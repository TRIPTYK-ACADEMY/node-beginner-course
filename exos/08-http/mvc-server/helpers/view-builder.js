const Util = require('util');
const Fs = require('fs');
const Read = Util.promisify(Fs.readFile);

module.exports = (req, res, status) => {
  Read(`${process.cwd()}/views${req.url}`, { encoding : 'UTF-8' } )
  .then( (result) => {
    res.writeHead(status, { 'Content-type' : 'text/html' });
    res.end(result);
  });
};