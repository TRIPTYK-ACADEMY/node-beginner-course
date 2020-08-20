console.log(global);

global.myVariable = 'Toto';
global.myFunction = (name) => { 
  if(!name) return false; 
  console.log(`Hello ${name}`); 
};

console.log(global.myVariable);
console.log(global);
global.myFunction('Triptyk');