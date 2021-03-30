// Le Big Ben est sur le point d'exploser, il faut désamorcer la bombe mais pour cela il faut trouver le mot qui désactive la bombe "sebastienestunbg"
// Créer un nouvel événement "Bomb"
// Toutes les secondes un événement sera lancé pour afficher un compte à rebours de 10 secondes qui se décrementera
// A la fin des 10 secondes, un événément s'enclenche et demande au démineur d'entrée un mot.
// Si celui-ci n'est pas bon, un événement déclenchera l'explosion 
// Si le mot est trouvé, un événement désactivera la bombe et vous serez l'héro de Londres.


const events = require("events");

const bomb = new events.EventEmitter();

let countdown = 10;
let pwd = "sebastienestunbg"

bomb.on('countdown', () =>{
  console.log(`Tictac la bombe va exploser, il vous reste ${countdown} secondes`);
  countdown--;
});

bomb.on('passwordRequest', () => {
  console.log("Quel est le mot de passe ?");
  process.stdin.on("data",(data) => {
    if(data.toString().trim() === pwd){
      bomb.emit('deactivate')
    } else {
      bomb.emit('activate')
    }
  })
})

bomb.on('activate', () => {
  console.log('La bombe a explosé, Adieu le Big Ben')
  process.exit()
})

bomb.on('deactivate', () => {
  console.log("La bombe n'a pas explosé, vous êtes le sauveur de Londres.")
  process.exit()
})

const countdownInterval = setInterval(() => {
  bomb.emit('countdown')
  if(!countdown){
    bomb.emit('passwordRequest')
    clearInterval(countdownInterval)
  }
}, 1000)

// process.stdin.on("data",(data) => {
//   console.log(data);
//   if(data === pwd){
//     bomb.emit('deactivate')
//   }
// })