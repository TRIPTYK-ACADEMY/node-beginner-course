const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function replay(){
  rl.question(`Veux-tu rejouer ? Taper "yes" ou "no" : `, (answer) => {
    if(answer === "yes"){
      console.log("Bonne chance ! \n \n");
      play();
    } else {
      console.log("Merci d'avoir joué");
      rl.close()
    }
  })
}

let cpt = 1;
const maxTry = 10;

function play() {
  const justAPrice = Math.floor(Math.random() * 1000) + 1;
  cpt = 1;
  
  console.log("Devinez un nombre entre 1 et 1000");

  rl.on('line', (input) => {
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
      replay();
    }
  });
}


const checkTry = () => {
  if(cpt === maxTry){
    console.log(`C'est perdu`);
    replay();
  } else {
    cpt++;
  }
}

play();