const logger = require("./logger");

const main = async () => {
  await logger.log("test", "bonjour");
  await logger.log("error", "bonjour");
  await logger.log("info", "bonjour");
};

main();
