const Http = require("http");

/**
 * On créée le serveur http
 */
const server = Http.createServer((request, response) => {
  const output = `
    <html>
      <head>
        <title>Smiley website ! 😆 </title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>Title h1 😍</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <h2>Title h2 😍</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </body>
    </html>
  `;
  /**
   * On dit que la réponse est de type HTML et que le status de réponse HTTP est 200
   */
  response.writeHead(200, { "Content-Type": "text/html" });

  /**
   * On ferme le flux et on envoie les données
   */
  response.end(output);
});

/**
 * On écoute sur le port local 8001
 */
server.listen(8001, () => {
  console.log(
    "Le serveur node écoute sur le port 8001 : http://localhost:8001"
  );
});
