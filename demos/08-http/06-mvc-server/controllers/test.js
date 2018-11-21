const fs = require('fs');
const promisify = require('es6-promisify').promisify;
const read = promisify(fs.readFile);

module.exports = async ( request, response ) => {
  read( `${process.cwd()}/views/test.html`, { encoding : 'utf-8' } )
    .then( result => {
      response.end('TEST');
    })
    .catch( error => { console.log( error ); })
}