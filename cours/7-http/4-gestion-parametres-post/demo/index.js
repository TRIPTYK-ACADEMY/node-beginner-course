const Http = require("http");

/**
 * On encapsule le processus de lecture des données du corps de la requête en une promesse, ce sera plus élagant et plus réutilisable à l'avenir.
 */
const readRequestData = (req) => {
  return new Promise((res, rej) => {
    let data = "";

    req.once("error", (err) => {
      rej(err);
    });

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.once("end", () => {
      res(data);
    });
  });
};

const server = Http.createServer(async (req, response) => {
  console.log(`${req.method} : request for ${req.url}`);
  const { searchParams: query, pathname: path, hash } = new URL(
    req.url,
    "http://localhost:8001"
  );

  /**
   * On précise que la réponse est en utf-8 car sinon nos caractères accentués et smileys vont être modifiés.
   */
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  /**
   * Si la méthode HTTP est GET
   */
  if (req.method === "GET") {
    /**
     * Si les query params possèdent la clé "all" égale à "true"
     */
    if (query.get("all") === "true") {
      response.write("Vous avez demandé tout 😏");
    } else {
      response.write("Vous n'avez rien demandé 😬");
    }
    /**
     * Le POST est généralement utilisé quand on envoie des données dans l'objet "body" de la requête HTTP, en effet, le nombre de caractères dans une URL web est limité.
     */
  } else if (req.method === "POST") {
    const data = await readRequestData(req);
    response.write("Voici ce que vous avez envoyé 😵 : " + data);
  }

  /**
   * On ferme le flux et on envoie les données
   */
  response.end();
});

server.listen(8001, () => {
  console.log("Node server listen port 8001 : http://localhost:8001");
});
