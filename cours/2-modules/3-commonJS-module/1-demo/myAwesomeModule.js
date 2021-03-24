/**
 * Dans notre module custom on utilise un autre module "colors" ainsi que un de nos modules customs
 */
const color = require("colors");
const currentDateString = require("./currentDateString");

const defaultName = "jean bernard";

/**
 * On exporte le nom par défaut du module, afin d'y accéder de l'extérieur
 */
exports.defaultName = defaultName;

/**
 * on exporte une fonction qui affiche le nom qu'on passe à la fonction, si pas on affiche le nom par défaut
 */
exports.awesome = (myName) => {
  console.log(
    `Bonjour 🤩 ${color.random(
      myName ?? defaultName
    )} 🤩, nous sommes le ${currentDateString()}`
  );
};
