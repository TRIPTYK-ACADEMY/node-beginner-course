const fs = require("fs/promises");

/**
 * On parse le JSON d'un fichier, tout simplement
 * @param {string} filePath
 * @returns
 */
module.exports = (filePath) => {
  return fs.readFile(filePath, "utf8").then((txt) => JSON.parse(txt));
};
