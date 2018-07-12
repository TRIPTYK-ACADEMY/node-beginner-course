const Http = require('http');

/*
const options = {
  hostname : 'www.technocite.be',
  path: '/index.php/fr/component/detailsform/?form=1192',
  port : 80,
  method: 'GET'
};
*/

const options = {
  hostname : 'www.triptyk.eu',
  path: '/fr/realisations',
  port : 80,
  method: 'GET'
};

let request = Http.request(options, (response) => {
  let output = '';
  console.log('Connexion');
  console.log(response.statusCode);
  console.log(response.headers);

  response.setEncoding('UTF-8');
  response.on('data', (stream) => {
    console.log(stream);
    output += stream;
  });
  response.on('end', () => {
    console.log(output);
  });
});

request.end();