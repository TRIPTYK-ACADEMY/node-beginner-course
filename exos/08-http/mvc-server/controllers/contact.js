const fs = require('fs');
const PageHandler = require(`${process.cwd()}/helpers/page-handler`);

module.exports = (req,res) => {

  if(req.method === 'GET')
  {
    PageHandler(req, res, '');
    
  }
  else if(req.method === 'POST')
  {
    let data = '';

    req.on('data', (chunk) => {
      data += decodeURIComponent(chunk.toString());
    });

    req.on('end', () => {

      if(!process.argv[2] || process.argv[2] !== '--demo')
      {
        let values = []
        data.split('&').forEach( (item) => {
          values.push(item.split('='));
        });
        let message = `Le nom du destinataire est ${values[0][1]} et il a envoyé un mail avec ${values[1][1]}.\n- Voici son message:\n${values[2][1].split('+').join(' ')}\n`
        fs.appendFileSync(`${process.cwd()}/private/email.txt`, message);

        PageHandler(req, res, 'Le message a bien été envoyé');
      }
      else 
      {
        PageHandler(req, res, "Le message n'a pas été envoyé car nous sommes en démo");
      }
    });
  }
};







