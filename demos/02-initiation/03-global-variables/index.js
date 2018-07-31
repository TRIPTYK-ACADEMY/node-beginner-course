console.log(global);

global.myVariable = 'Toto';
global.myFunction = function(name) { 
  if(!name) return false; 
  console.log(`Hello ${name}`); 
};
console.log(global);
console.log(global.myVariable);
global.myFunction('Marcel');