const http = require("http");
const fsPromise = require("fs/promises");

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

const notFound = (response, message = "not-found") => {
  response.writeHead(404, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ message }));
  response.end();
};

const internalError = (response, message = "internal-server-error") => {
  response.writeHead(500, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ message }));
  response.end();
};

const readUsers = () => {
  return fsPromise
    .readFile("./users.json", "utf8")
    .then((e) => JSON.parse(e))
};

/**
 * On créée le serveur http
 */
const server = http.createServer(async (request, response) => {
  console.log(`${request.method} : request for ${request.url}`);
  const { searchParams: query, pathname: path, hash } = new URL(
    request.url,
    "http://localhost:8001"
  );

  try {
    if (path === "/users") {
      if (request.method === "GET") {
        const usersJSON = await readUsers();
        const json = query.get("id")
          ? usersJSON.find((u) => u.id == query.get("id"))
          : usersJSON;

        if (!json) {
          return notFound(response);
        }

        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(json));
        response.end();
      } else if (request.method === "POST") {
        const usersJSON = await readUsers();
        let body = await readRequestData(request);
        body = JSON.parse(body)
        body.id = usersJSON.length + 1;


        usersJSON.push(body);

        await fsPromise.writeFile(
          "./users.json",
          JSON.stringify(usersJSON, null, 2)
        );
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(body));
        response.end();
      } else {
        return notFound(response);
      }
    } else {
      return notFound(response);
    }
  } catch (e) {
    return internalError(response, e.message);
  }
});

server.listen(8001, () => {
  console.log(
    "Le serveur node écoute sur le port 8001 : http://localhost:8001"
  );
});
