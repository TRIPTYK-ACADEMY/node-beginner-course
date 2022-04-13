
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("log", message)
  }
}

const logger = new Logger();

logger.on("log", (message) => {
  console.log(message);
})

class User {
  constructor(name) {
    logger.log(`User ${name} created`);
  }
}

const sebastien = new User("Sébastien");
const amaury = new User("Amaury");

logger.log("Fin de la création");