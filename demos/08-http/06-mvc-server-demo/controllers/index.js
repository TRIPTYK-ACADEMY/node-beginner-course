const Fs = require('fs');
const Promisify = require('es6-promisify').promisify; // Util.promisify
const Read = Promisify(Fs.readFile);

module.exports = async ( req , res ) => {

  Read(`${process.cwd()}/views/index.html`, { encoding : 'UTF-8'} )
    .then ( result => {
      Read(`${process.cwd()}/models/contacts.json`, { encoding : 'UTF-8'})
        .then( ( model ) => {
          let contacts = JSON.parse(model);
          let output = '';
          contacts.forEach( ( contact ) => {
            output += '<li>' + contact.name + '</li>';
          });
          let template = result.replace(/{{LIST}}/g, output);
          res.writeHead(200, { 'Content-type' : 'text/html' })
          res.end(template);
        });
    })
    .catch( (error) => console.log(error) );
};