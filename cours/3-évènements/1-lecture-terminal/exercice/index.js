/**
 * Faire un programme de juste prix 🤑
 * 📌 Déterminez un nombre aléatoire entre 1-1000 (Math.random).
 * 📌 Le joueur a perdu après 10 essais.
 * 📌 Si le joueur a trouvé, quittez le programme avec (process.exit).
 */

const justAPrice = Math.floor(Math.random() * 1000) + 1;
let cpt = 1;
const maxTry = 10;

console.log("Devinez un nombre entre 1 et 1000");

process.stdin.on('data', input => {
  input = parseInt(input);

  if(input > justAPrice){
    console.log(`${input} est trop haut, il te reste ${maxTry-cpt} chances`);
    checkTry();
  }

  if(input < justAPrice){
    console.log(`${input} est trop bas, il te reste ${maxTry-cpt} chances`);
    checkTry();
  }

  if(input === justAPrice){
    console.log(`Bien joué ${input} est le bon nombre. Vous l'avez trouvé en ${cpt} essais`)
    process.exit();
  }
});


const checkTry = () => {
  if(cpt === maxTry){
    console.log(`C'est perdu`);
    process.exit();
  } else {
    cpt++;
  }
}