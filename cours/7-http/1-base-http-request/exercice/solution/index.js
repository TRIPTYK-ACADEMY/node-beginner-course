const http = require("https");

const options = {
  hostname: "triptyk-api-dev.triptyk.eu",
  path: "/api/v1/posts",
  port: 443,
  method: "GET", //GET, POST, PATCH/UPDATE, DELETE
};

let request = http.request(options, (response) => {
  let output = "";

  response.setEncoding("UTF-8");
  response.on("data", (stream) => {
    output += stream;
  });

  response.on("end", () => {
    const parsed = JSON.parse(output);
    console.log(parsed.data.map((e) => e.attributes.title));
  });
});

request.end();
