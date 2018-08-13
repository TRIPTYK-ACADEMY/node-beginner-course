const fs = require('fs');
const promisify = require('es6-promisify').promisify;
const read = promisify(fs.readFile);

module.exports = async ( request, response ) => {
    read( `${process.cwd()}/views/index.html`, { encoding : 'utf-8' } )
        .then( result => {
            read( `${process.cwd()}/models/contacts.json`, { encoding : 'utf-8' }).then( (model) => {
                let mod = JSON.parse(model);
                let template = '';
                mod.forEach( (item) => {
                    template += '<li>' + item.name + '</li>\r';
                });
                let output = result.replace(/{{LIST}}/, template);
                response.end(output)
            });
           
        })
        .catch( error => { console.log( error ) })
}