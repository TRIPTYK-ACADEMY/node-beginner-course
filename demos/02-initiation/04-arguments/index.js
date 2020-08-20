// process.argv est un tableau
// process.argv contient deux entrées par défaut :
//  - path de l'exécutable node
//  - path du script courant
const collectName = () => {
  if(typeof(process.argv[2]) === 'undefined') 
    return 'Pas de nom trouvé';
  else 
    return `Hello ${process.argv[2]}`;
}
const output = collectName();
console.log(output);