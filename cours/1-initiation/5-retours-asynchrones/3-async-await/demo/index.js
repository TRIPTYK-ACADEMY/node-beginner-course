/**
 * L'async await est une syntaxe plus élégante pour travailler avec les objets promesses
 */

/**
 * Afin de bien montrer le async await, la fonction pour attendre quelques secondes a été séparée du code
 */
function sleep(ms) {
  return new Promise((res, rej) => setTimeout(res, ms));
}

/**
 * Le mot clé async marque la fonction comme objet Promesse
 * Le retour de la fonction asynchrone est effectué grâce au return, comme dans une fonction classique.
 * Le mot clé await est utilisable à l'intérieur d'une fonction avec le mot clé async, elle permet d'attendre le retour de la promesse.
 * Une erreur est émise grâce au mot-clé 'throw'
 */
function myPromiseSumFunction(sum1, sum2, callback) {
  await sleep(2000);
  if (sum1 + sum2 < 0) {
    throw "Erreur, le résultat ne peut être inférieur à 0";
  }
  return sum1 + sum2;
}

/**
 * Afin d'utiliser le "await" nous devons être dans une fonction marquée "async"
 * On utilise le await qui attend le résultat de la promesse.
 * On intercepte les erreurs avec le try {}catch(e) {}
 */
async function main() {
  /**
   * Le try intercepte les erreurs dans le block et les envoie dans le block catch
   */
  try {
    /**
     * On attend le résultat avec "await"
     */
    let result = await myPromiseSumFunction(1, 2);
    console.log(`Le résultat de l'addition 1 : `, result);
    console.log("Multiplions le résultat par 10");
    result *= 10;
    console.log(`Le résultat final est : `, result);
    /**
     * On intercepte les erreurs dans le block "catch"
     */
  } catch (e) {
    console.error(e);
  }

  /**
   * Ceci va délencher une erreur
   */
  try {
    /**
     * On attend le résultat avec "await"
     */
    let result = await myPromiseSumFunction(1, -10);
    console.log(`Le résultat de l'addition 2 : `, result);
    console.log("Multiplions le résultat par 10");
    result *= 10;
    console.log(`Le résultat final est : `, result);
    /**
     * On intercepte les erreurs dans le block "catch"
     */
  } catch (e) {
    console.error(e);
  }

  /**
   * Plein de promesses, de manière élégante et propre
   */
  try {
    let result1 = await myPromiseSumFunction(0, 10);
    console.log(`Le résultat de l'addition : `, result1);
    result1 = await myPromiseSumFunction(result1, 10);
    console.log(`Le résultat de l'addition : `, result1);
    result1 = await myPromiseSumFunction(result1, 10);
    console.log(`Le résultat de l'addition : `, result1);
    result1 = await myPromiseSumFunction(result1, 10);
    console.log(`Le résultat de l'addition : `, result1);
    result1 = await myPromiseSumFunction(result1, 10);
    console.log(`Le résultat de l'addition : `, result1);
  } catch (e) {
    console.error(e);
  }
}

main();
