const fsPromises = require("fs/promises");
const fs = require("fs");

/**
 * Exécute directement par nodejs et attend que l'action finisse
 */
console.log(fs.readdirSync("."));

/**
 * Version promesse de fs
 */
fsPromises.readdir(".").then((e) => {
  console.log(e);
});

/**
 * Avec les types de fichiers
 */
fsPromises.readdir(".", { withFileTypes: true }).then((e) => {
  for (const el of e) {
    console.log(el.name, el.isFile(), el.isSymbolicLink());
  }
});
