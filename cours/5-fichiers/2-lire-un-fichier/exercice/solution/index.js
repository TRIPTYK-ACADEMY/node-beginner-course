const fs = require("fs/promises");

const countEmojis = async (file) => {
  const content = await fs.readFile(file, "utf8");

  const result = content.split("").reduce((p, c) => {
    if (c.match(/[a-z]/i)) {
      return p + 1;
    } else {
      return p;
    }
  }, 0);

  return result;
};

countEmojis("./mon-fichier.txt").then(console.log);
