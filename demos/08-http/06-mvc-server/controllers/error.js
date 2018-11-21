const fs = require('fs');
const promisify = require('es6-promisify').promisify;
const read = promisify(fs.readFile);

module.exports = ( request, response ) => {
  read( `${process.cwd()}/views/error.html`, { encoding : 'UTF-8' } )
    .then( result => {
        response.end(result)
    })
    .catch( error => { console.log( error ) })
}