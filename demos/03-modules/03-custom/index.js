const moduleWhoSayHello = require('./modules/full-module-simple');
const moduleWhoSayHelloToMe = require('./modules/full-module-with-param');
const customUtilModule = require('./modules/multiple-exports');

moduleWhoSayHello(); // // Hello, i'm a module !
moduleWhoSayHelloToMe('Steve'); // Hello Steve, i'm a module !
customUtilModule.yourFunctionOne(); // Hello, i am the first function in a module !'
customUtilModule.yourFunctionTwo(123); // The parameter value is : 123