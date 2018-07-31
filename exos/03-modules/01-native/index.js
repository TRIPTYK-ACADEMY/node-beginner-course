const Util = require('util');

let stringToTest = 'Technocité';
console.log(Util.types.isStringObject(stringToTest)); // false

stringToTest = new String('Technocité');
console.log(Util.types.isStringObject(stringToTest)); // true