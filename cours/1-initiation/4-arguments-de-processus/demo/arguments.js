/**
 * Les arguments sont accessibles dans la variable process.argv 
 * - process.argv[0] => le chemin de l'exécutable node
 * - process.argv[1] => le chemin du script
 */
const collectName = () => {
  if(process.argv[2] === undefined) {
    return 'Pas de nom trouvé 😢';
  } else {
    return `Hello ${process.argv[2]} 👋`;
  }
}

const output = collectName();
console.log(output);