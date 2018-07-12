const Events = require('events');
const Handler = new Events.EventEmitter();

Handler.on('open', function(message){
  console.log(message);
});

Handler.on('close', function(message){
  console.log(message);
  process.exit();
});

Handler.on('success', function(message){
  console.log(message);
});

Handler.on('error', function(message){
  console.log(message);
  Handler.emit('close', 'Database connexion closed');
});
