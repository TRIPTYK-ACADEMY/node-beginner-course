const fs = require("fs");

const stream = fs.createWriteStream("file.txt", "UTF-8");
const writestream = fs.createWriteStream("file-copy.txt", "UTF-8");
stream.emit("");

/**
 *
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
