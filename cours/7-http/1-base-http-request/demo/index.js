const http = require("https");

const options = {
  hostname: "www.triptyk.eu",
  port: 443,
  method: "GET", //GET, POST, PATCH/UPDATE, DELETE
};

let request = http.request(options, (response) => {
  let output = "";

  console.log("Connexion");
  console.log(response.statusCode); // C'est le code pour indiquer le retour de la page (savoir si tout s'est passé ou pas);
  console.log(response.headers);

  response.setEncoding("UTF-8");
  response.on("data", (stream) => {
    output += stream;
  });

  response.on("end", () => {
    console.log("Requête terminée");
  });
});

request.end();
