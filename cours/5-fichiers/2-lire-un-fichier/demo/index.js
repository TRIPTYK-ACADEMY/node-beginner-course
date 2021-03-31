const fsPromises = require("fs/promises");
const fs = require("fs");

const filePath = "./mon-fichier.txt";

/**
 * Lis un fichier, on précise que l'encodage par défaut du fichier est utf-8 du coup ça nous renvoie une chaîne de caractères
 */
console.log(fs.readFileSync(filePath, "utf8"));

/**
 * Lis un fichier de manière asynchrone
 */
fsPromises.readFile(filePath, "utf8").then((e) => {
  console.log(e);
});