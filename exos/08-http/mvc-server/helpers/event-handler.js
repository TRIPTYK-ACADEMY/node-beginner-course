const Events = require('events');
const Fs = require('fs');
const EventHandler = new Events.EventEmitter();

EventHandler.on('log', async (message) => {
  await Fs.appendFileSync(`${process.cwd()}/private/logs.txt`, message);
});

module.exports = EventHandler;
