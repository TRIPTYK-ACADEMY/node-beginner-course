const fs = require("fs/promises");

async function onlyFolders(dir) {
  const result = await fs.readdir(dir, {
    withFileTypes: true,
  });
  return result.filter((e) => e.isDirectory()).map((e) => e.name);
}

/**
 * Same as onlyFolders("../").then((e) => console.log(e));
 */
onlyFolders("../").then(console.log);
