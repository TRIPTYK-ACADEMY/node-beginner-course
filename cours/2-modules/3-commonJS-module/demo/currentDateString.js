/**
 * Convertis le numéro du mois en texte
 */
const monthNumberToString = (number) => {
  switch (number) {
    case 0:
      return "Janvier";
    case 1:
      return "Février";
    case 2:
      return "Mars";
    case 3:
      return "Avril";
    case 4:
      return "Mai";
    case 5:
      return "Juin";
    case 6:
      return "Juillet";
    case 7:
      return "Août";
    case 8:
      return "Septembre";
    case 9:
      return "Octobre";
    case 10:
      return "Novembre";
    case 11:
      return "Décembre";
  }
};

/**
 * Module.exports représente tous les exports du module
 * Renvoie le nom de l'utilisateur ainsi que la date du jour de manière sexy
 * Le module pourra donc être appelé de cette manière: `module()`
 */
module.exports = () => {
  const currentDate = new Date();
  return `${currentDate.getDate()} ${monthNumberToString(
    currentDate.getMonth()
  ).toLowerCase()} ${currentDate.getFullYear()}`;
};
