/**
 * Ce module est juste un exemple pour dire que ça existe, pas vraiment d'exercice car les modules ESM ne sont pas encore très intégrés dans l'environnement Node.JS
 */
export const emojisList = ["🏋", "🚣", "🏄‍♂️", "🚵", "🤸‍♀️", "🤹", "🧘‍♀️", "🛌"];

/**
 * Remplace tous les caractères par un emoji
 */
export const stylePhrase = (phrase) => {
  return phrase
    .split("")
    .map((char) => {
      // on ignore les espaces
      if (char === " ") {
        return char;
      }
      return emojisList[
        Math.floor(Math.random() * Math.floor(emojisList.length - 1))
      ];
    })
    .join("");
};
