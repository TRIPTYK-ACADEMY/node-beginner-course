/**
 * Une promesse est un objet (Promise) qui représente la complétion ou l'échec d'une opération asynchrone.
 */

/**
 * L'implémentation est déjà un peu plus propre, le retour d'erreur et de résultat sont déjà bien séparés
 * La fonction res() est utilisée pour signaler que la promesse s'est résolue avec succès
 * La fonction rej() est utilisée pour signaler que la promesse a échoué
 */
function myPromiseSumFunction(sum1, sum2, callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (sum1 + sum2 < 0) {
        return rej("Erreur, le résultat ne peut être inférieur à 0");
      }
      res(sum1 + sum2);
    }, 1000);
  });
}

/**
 * On utilise le .then, qui est la fonction exécutée lorsque la promesse s'est résolue avec succès.
 * Si une erreur s'est produite, la fonction .catch est déclenchée.
 * Une promesse est également chaînable, c'est à dire que l'on peut ajouter plusieurs then() à la suite de l'autre, chacun renvoyant le résultat du then() précédent.
 */
myPromiseSumFunction(1, 2)
  .then((result) => {
    console.log(`Le résultat de l'addition 1 : `, result);
    return result;
  })
  .then((result) => {
    console.log("Multiplions le résultat par 10");
    return result * 10;
  })
  /**
   * le result du then() ci dessous est donc maintenant la valeur du result de l'ancien then() multiplié par 10
   */
  .then((result) => {
    console.log(`Le résultat final est : `, result);
  })
  /**
   * Si une erreur s'est produite dans la chaîne, on l'affiche
   */
  .catch((e) => {
    console.error(e);
  });

/**
 * On utilise le .then, qui est la fonction exécutée lorsque la promesse s'est résolue avec succès.
 * Si une erreur s'est produite, la fonction .catch est déclenchée.
 */
myPromiseSumFunction(1, -10)
  .then((result) => {
    console.log(`Le résultat de l'addition 2 : `, result);
    return result;
  })
  .then((result) => {
    console.log("Multiplions le résultat par 10");
    return result * 10;
  })
  /**
   * Si une erreur s'est produite dans la chaîne, on l'affiche
   */
  .catch((e) => {
    console.error(e);
  });

/**
 * Malgré tout, ce n'est pas encore très élégant
 */
myPromiseSumFunction(0, 10)
  .then((result) => {
    console.log(`Le résultat de l'addition : `, result);
    return myPromiseSumFunction(result, 10);
  })
  .then((result) => {
    console.log(`Le résultat de l'addition : `, result);
    return myPromiseSumFunction(result, 10);
  })
  .then((result) => {
    console.log(`Le résultat de l'addition : `, result);
    return myPromiseSumFunction(result, 10);
  })
  .then((result) => {
    console.log(`Le résultat de l'addition : `, result);
    return myPromiseSumFunction(result, -100);
  })
  .catch((e) => {
    console.error("une erreur est survenue : ", e);
  });
