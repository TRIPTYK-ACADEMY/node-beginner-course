const fs = require("fs/promises");

const countChar = async (file) => {
  const content = await fs.readFile(file, "utf8");

  const result = content.split("").reduce((p, c) => {
    if (c !== "") {
      return p + 1;
    } else {
      return p;
    }
  }, 0);

  return result;
};

countChar("./mon-fichier.txt").then(console.log);