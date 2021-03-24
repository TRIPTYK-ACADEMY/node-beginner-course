/**
 * La JSDOC permet de documenter et d'aider le développeur et l'IntelliSense à savoir de quel types sont les arguments,les fonctions,...
 * Vous pouvez mouseOver sur une fonction pour voir sa DOC
 */

/**
 * Retourne la chaine de caractères en format spongebob-case (une lettre en minuscule en impair et une lettre majuscule en pair)
 * @param {string} string La chaine de caractères
 * @returns string
 */
function toSpongeBobCase(string) {
  return string
    .split("")
    .map((c, i) => {
      if (i % 2) {
        return c.toUpperCase();
      } else {
        return c.toLowerCase();
      }
    })
    .join("");
}

// spongeBobbedString. autocomplète automatiquement avec les fonctions d'un string
const spongeBobbedString = toSpongeBobCase("bonjour");

console.log(spongeBobbedString);

function toSpongeBobCaseWithNoDoc(string) {
  return string
    .split("")
    .map((c, i) => {
      if (i % 2) {
        return c.toUpperCase();
      } else {
        return c.toLowerCase();
      }
    })
    .join("");
}

// spongeBobbedNoType. ne possède pas d'autocomplétion
const spongeBobbedNoType = toSpongeBobCaseWithNoDoc("bonjour");
