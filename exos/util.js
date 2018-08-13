const Util = require('util');

async function fn()
{
  return 'Hello World';
}

const callbackFunction = Util.callbackify(fn);

callbackFunction( (err, ret) => {
  if (err) throw err;
  console.log(ret);
});