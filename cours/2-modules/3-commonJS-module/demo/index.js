/**
 * On importe notre module custom qui se trouve dans le répertoire courant avec "require"
 */
const myModule = require("./myAwesomeModule");

console.log("Le nom par défaut est ", myModule.defaultName);
myModule.awesome("aa");
myModule.awesome(); //prend le nom par défaut
