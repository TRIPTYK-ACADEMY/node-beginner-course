const events = require("events");

const game = new events.EventEmitter();
let level = 0;

game.on('level_finished', message =>{
    console.log(`Vous êtes arrivé au niveau suivant ! 🎉`);
    level++;
});

game.on('game_finished', message =>{
    console.log(`Vous avez fini le jeu au niveau ${level} ! 🎉🎉🎉`);
    process.exit();
});

process.stdin.on("data",(data) => {
    console.log("Que voulez-vous faire ?\n-1 Vaincre le boss du dongeon\n-2 Finir le jeu.");
    switch(data.toString().trimRight()) {
        case "1":
            game.emit('level_finished');
            break;
        case "2":
            game.emit('game_finished');
            break;
        default: {
            console.log("Veuillez entrer un choix valide.");
        }
    }
});