const fsPromises = require("fs/promises");
const readJsonFile = require("../utils/readJsonFile");

/**
 * L'index du controller contacts
 * @param {Request} req
 * @param {Response} res
 */
exports.index = async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const contactFile = await fsPromises.readFile(
    process.cwd() + "/views/contact.html",
    "utf8"
  );

  const model = await readJsonFile("./models/contacts.json");

  res.write(
    contactFile.replace(
      "{{LIST}}",
      model
        .map((c) => {
          return `<li>${c.name} (${c.gender.substr(0, 1).toUpperCase()})</li>`;
        })
        .join("")
    )
  );
  res.end();
};
