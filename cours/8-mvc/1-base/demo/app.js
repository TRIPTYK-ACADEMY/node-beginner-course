const http = require("http");
const router = require("./app.router");

/**
 * On crée notre serveur et on laisse le routeur se charger du reste
 */
http.createServer(router).listen(8001, (err) => {
  if (err) console.log(err);
  console.log("Serveur is running on port 8001");
});
