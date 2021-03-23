const fs = require("fs");

const stream = fs.createReadStream("file.txt", "UTF-8");

/**
 * Le "data" est déclenché à chaque fois qu'un nouveau bloc de données est lu.
 * Chaque bloc de données "pèse" 65536 octets (64 kb). Contrôlable avec l'option highWaterMark.
 * Particulièrement léger niveau mémoire, très utile les streams pour les gros fichiers.
 */
stream.on("data", (chunk) => {
  console.log(`Je lis actuellement : ${chunk.length} octets`);
});

/**
 * Si une erreur se produit
 */
stream.on("error", console.error);

/**
 * Le stream a fini de lire
 */
stream.on("end", () => {
  console.log("End stream reading");
});
