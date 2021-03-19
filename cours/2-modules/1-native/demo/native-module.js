/**
 * Module basique inclu dans node : util
 */
const util = require("util");

console.log(util.types.isDate(new Date()));
console.log(util.types.isDate(123));
console.log(util.format("%s a %d années aujourd'hui","Amaury",5));
console.log(util.isDeepStrictEqual(
    { // objet 1
        a : 2
    }, // objet 2
    {
        a : 2
    }
));
