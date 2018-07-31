function collectName() {
  if(typeof(process.argv(['name']) === 'undefined')) 
    return 'Pas de nom trouvé';
  else 
    return `Hello ${process.argv['name']}`;
}
const output = collectName();
console.log(output);