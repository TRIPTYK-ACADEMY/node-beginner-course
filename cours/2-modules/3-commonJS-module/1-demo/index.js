/**
 * On importe notre module custom qui se trouve dans le répertoire courant avec "require"
 */
const myModule = require("./myAwesomeModule");
const currentDate = require("./currentDateString");

console.log("Le nom par défaut est ", myModule.defaultName);
myModule.awesome("aa");
myModule.awesome(); //prend le nom par défaut

// on utilise le module par défaut
console.log("Nous sommes le : ", currentDate());
