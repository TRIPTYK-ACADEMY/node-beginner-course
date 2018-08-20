const Util = require('util');
const Fs = require('fs');
const Read = Util.promisify(Fs.readFile);

module.exports = (req,res) => {
  Read(`${process.cwd()}/views/destinations.html`, { encoding : 'UTF-8' } )
    .then( (result) => {
      Read(`${process.cwd()}/models/destinations.json`, 'UTF-8')
        .then( (model) => {
          let destinations = JSON.parse(model);
          let template  = '';
          destinations.forEach( (destination) => {
            template += `
              <div class="destinations">
                <h3>${destination.city} - ${destination.country}</h3>
                <img src="${destination.picture}" alt="" />
                <p class="price">${destination.price}</p>
              </div>`;
          });
          let output = result.replace(/{{DESTINATIONS}}/g, template);
          res.writeHead(200, { 'Content-type' : 'text/html' });
          res.end(output);
        });
    });
};