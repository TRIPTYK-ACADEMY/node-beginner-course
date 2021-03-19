console.log(global);

/**
 * On ajoute la clé "coucou" avec la valeur "hello 🔥" à l'objet global
 */
global.coucou = "hello 🔥";

console.log(global); // => {...,coucou : "hello",...}
console.log(coucou); // => "hello 🔥"