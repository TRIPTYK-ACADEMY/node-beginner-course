exports.yourFunctionOne = () => {
  console.log('Hello, i am the first function in a module !');
}
exports.yourFunctionTwo = (parameter) => {
  console.log('Hello, i am the second function in a module, and i have a parameter !');
  console.log(`The parameter value is : ${parameter}`);
}