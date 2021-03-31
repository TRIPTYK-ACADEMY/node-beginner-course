const Http = require("http");
const { createReadStream } = require("fs");

/**
 * On créée le serveur http
 */
const server = Http.createServer((request, response) => {
  let type;
  let output;

  /**
   * On extrait l'extension du fichier dans l'url de requête
   */
  let extension = request.url.split(".").pop();
  
  if (request.url === "/") {
    type = "text/html";
    output = createReadStream("index.html");
  } else if (extension === "jpg") {
    output = createReadStream(`.${request.url}`);
    type = "image/jpg";
  } else if (extension === "css") {
    output = createReadStream(`.${request.url}`);
    type = "text/css";
  } else {
    response.writeHead(404);
    return response.end();
  }

  response.writeHead(200, { "Content-Type": type });
  /**
   * On utilise pipe() afin de déverser le stream du fichier dans le stream de réponse de l'API
   */
  output.pipe(response);
});

server.listen(8001, () => {
  console.log(
    "Le serveur node écoute sur le port 8001 : http://localhost:8001"
  );
});
