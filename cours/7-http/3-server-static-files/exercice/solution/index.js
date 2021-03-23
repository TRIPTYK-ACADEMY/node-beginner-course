const Http = require("http");
const { createReadStream } = require("fs");

const imagesTypes = ["jpg", "png", "ico", "jpeg"];

/**
 * On créée le serveur http
 */
const server = Http.createServer((request, response) => {
  let type;
  let output;
  let status = 200;

  /**
   * On extrait l'extension du fichier dans l'url de requête
   */
  let extension = request.url.split(".").pop().toLowerCase();

  if (request.url === "/") {
    output = createReadStream("index.html");
    type = "text/html";
  } else if (imagesTypes.includes(extension)) {
    output = createReadStream(`.${request.url}`);
    type = `image/${extension}`;
  } else if (extension === "css") {
    output = createReadStream(`.${request.url}`);
    type = `text/css`;
  } else if (extension === "js") {
    output = createReadStream(`.${request.url}`);
    type = `application/javascript`;
  } else {
    output = createReadStream(`./not-found.html`);
    type = "text/html";
    status = 404;
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
