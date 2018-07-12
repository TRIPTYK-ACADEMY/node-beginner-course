const Events = require('events');

const game = new Events.EventEmitter();
game.on('success', function(message){
    console.log(message);
});
game.emit('success', 'You win');