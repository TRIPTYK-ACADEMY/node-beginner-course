const routes = [
  {
    /**
     * L'url de base
     */
    url: "/",
    /**
     * On require en dehors de la fonction routeur car require() est une fonction synchrone et bloque l'exécution du processus node, ce qui * ferait que notre serveur bloquerait un léger instant à chaque requête.
     */
    controller: require("./controllers/contacts"),
    /**
     * La méthode du controller à appeler
     */
    action: "index",
    /**
     * La méthode HTTP
     */
    method: "GET",
  },
];

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
module.exports = async (req, res) => {
  const { searchParams: query, pathname: path } = new URL(
    req.url,
    "http://localhost:8001"
  );

  /**
   * On cherche dans le tableau de routes la correspondance
   */
  let route = routes.find(
    (item) => item.url === path && item.method.toUpperCase() === req.method
  );

  /**
   * On englobe d'un try catch pour chopper les erreurs
   */
  try {
    if (route) {
      /**
       * "await" comme ça le try catch marchera dans la fonction appellée
       */
      await route.controller[route.action](req, res);
    } else {
      /**
       * Not found
       */
      res.writeHead(404, {
        "Content-Type": "text/html",
      });
      res.write("Not found");
      res.end();
    }
  } catch (e) {
    /**
     * Internal error
     */
    res.writeHead(500, {
      "Content-Type": "text/html",
    });
    res.write(e.message);
    res.end();
  }
};
