/**
 * Ici nous allons apprendre les différences et les points communs entre module.exports et exports.<truc>
 */

console.log("module.exports", module.exports); // => {}, un objet vide par défaut
console.log("exports", exports); // => {}, un objet vide par défaut

// => exports est égal à l'objet de vide de module.exports, et y fera toujours référence, même si module.exports change

/**
 * On remplace l'objet vide par une fonction
 */
module.exports = () => {
  console.log("Hello");
};

console.log("module.exports", module.exports); // => [Function (anonymous)], notre fonction qui dit bonjour
console.log("exports", exports); // => {} ça fait toujours référence à notre objet vide, mais le module ne l'utilise plus pour l'exportation

/**
 * Quand on voudra appeller la fonction qui dit "hello", on devra faire comme ci-dessous.
 *
 * const module = require("./index");
 * module();
 */

// on reset les exports qu'on a modifié au dessus
module.exports = exports;

console.log("==== resetted module exports ====");
console.log("module.exports", module.exports); // => {}, un objet vide par défaut
console.log("exports", exports); // => {}, un objet vide par défaut

exports.sayHello = () => {
  console.log("Hello");
};

console.log("module.exports", module.exports); // => { sayHello: [Function (anonymous)] }, notre fonction sayHello
console.log("exports", exports); // => { sayHello: [Function (anonymous)] }, notre fonction sayHello

/**
 * Quand on voudra appeller la fonction qui dit "hello", on devra faire comme ci-dessous.
 *
 * const module = require("./index");
 * module.sayHello();
 */

/**
 * 📍 Quand notre module veut exporter plusieurs éléments, il est intéressant d'utiliser la syntaxe exports.<truc>
 */
exports.unAutreTruc = 5;

console.log("module.exports", module.exports); // => { sayHello: [Function (anonymous)], unAutreTruc: 5 }, notre unAutreTruc est dans les exports
console.log("exports", exports); // => { sayHello: [Function (anonymous)], unAutreTruc: 5 }
