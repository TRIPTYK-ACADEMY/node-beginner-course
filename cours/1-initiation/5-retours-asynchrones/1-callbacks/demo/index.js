/**
 * Un callback est une fonction exécutée lorsque la fonction appellée a fini de s'éxécuter en arrière plan
 * C'est la plus ancienne méthode et la plus chaotique qui était éxécutée pour attendre le retour d'une tâche asynchrone
 * Généralement, les arguments de la fonction de callback étaient sous cette forme : (erreur,résultat) => {...}
 */

function myCallBackSumFunction(sum1, sum2, callback) {
  setTimeout(() => {
    if (sum1 + sum2 < 0) {
      return callback("Erreur, le résultat ne peut être inférieur à 0");
    }
    callback(null, sum1 + sum2);
  }, 1000);
}

myCallBackSumFunction(
  1, // sum1
  1, // sum2
  /**
   * Notre fonction callback, appelée dès que myCallBackFunction a fini
   */
  (err, resultFromTheFunction) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Le résultat de l'addition 1 : `, resultFromTheFunction);
  }
);

myCallBackSumFunction(
  1, // sum1
  -5, // sum2
  /**
   * Notre fonction callback, appelée dès que myCallBackFunction a fini
   */
  (err, resultFromTheFunction) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Le résultat de l'addition 2 : `, resultFromTheFunction);
  }
);

/**
 * Pourquoi chaotique ?
 * Car si on doit attendre à chaque fois le retour de la fonction avant d'éxécuter la suite on se retrouvait vite avec ceci :
 */

myCallBackSumFunction(1, 1, (err, resultFromTheFunction) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Le résultat de l'addition : `, resultFromTheFunction);
  myCallBackSumFunction(
    resultFromTheFunction,
    1,
    (err, resultFromTheFunction) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Le résultat de l'addition : `, resultFromTheFunction);
      myCallBackSumFunction(
        resultFromTheFunction,
        2,
        (err, resultFromTheFunction) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(`Le résultat de l'addition : `, resultFromTheFunction);
        }
      );
    }
  );
});

/**
 * Dans ce cas-ci l'exemple est encore simple, mais imaginez des examples plus complexes, le code devenait vite imbuvable.
 */
