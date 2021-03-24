/**
 * 📌Créer un module de log permettant de créer une arborescende de dossiers comme ceci :
 * 📁logs
 *  📁2021
 *   📁03
 *    📁23
 *     📝09.log
 * 📌Créer une fonction permettant d'écrire dans le fichier log pour la journée.
 * 📌Créer une fonction permettant d'effacer les logs de la date actuelle
 */

const logger = require("./solution/logger");

const main = async () => {
  await logger.log("test", "bonjour");
  await logger.log("error", "bonjour");
  await logger.log("info", "bonjour");
  await logger.removeLogs();
};

main();
