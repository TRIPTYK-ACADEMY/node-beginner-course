/**
 * Faire un serveur Http servant des réponses en JSON
 *
 */

const Http = require("http");
const { createReadStream } = require("fs");
const fsPromises = require("fs/promises");

const imagesTypes = ["jpg", "png", "jpeg"];

/**
 * On créée le serveur http
 */
const server = Http.createServer(async (request, response) => {
  let type;
  let output;
  let status = 200;

  /**
   * On extrait l'extension du fichier dans l'url de requête
   */
  let extension = request.url.split(".").pop().toLowerCase();

  if (request.url === "/users") {
    output = createReadStream("./users.json");
    type = "application/json";
  } else if (imagesTypes.includes(extension)) {
    output = createReadStream(`.${request.url}`);
    type = `image/${extension}`;
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ message: "not-found" }));
    response.end();
    return;
  }

  response.writeHead(status, { "Content-Type": type });
  /**
   * On utilise pipe() afin de transférer le stream du fichier dans le stream de réponse de l'API
   */
  output.pipe(response);
});

server.listen(8001, () => {
  console.log(
    "Le serveur node écoute sur le port 8001 : http://localhost:8001"
  );
});
