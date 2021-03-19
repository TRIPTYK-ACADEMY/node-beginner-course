/**
 * - Faire un additionneur qui additionne tous les chiffres que vous passez comme argument
 * - Indice : parseInt() pour transformer les chaines de caractères en nombre.
 */

let result = 0;

for (const arg of process.argv.slice(2)) {
    result = result + parseInt(arg);
}

console.log(result);