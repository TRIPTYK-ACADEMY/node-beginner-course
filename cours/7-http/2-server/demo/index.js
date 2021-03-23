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

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(output);
});

server.listen(8001, () => {
  console.log(
    "Le serveur node écoute sur le port 8001 : http://localhost:8001"
  );
});
