const Http = require("http");
const fs = require("fs/promises");

const server = Http.createServer(async (request, response) => {
  const postsString = await fs.readFile("./posts.json");
  const { posts } = JSON.parse(postsString);

  const output = `
    <html>
      <head>
        <title>Smiley website ! 😆 </title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>Articles</h1>
        ${posts.map((e) => `<h2>${e.title}</h2><p>${e.content}</p>`)}
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
