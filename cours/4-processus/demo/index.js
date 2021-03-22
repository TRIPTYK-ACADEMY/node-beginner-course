/**
 * Permet d'interragir avec votre système d'exploitation en lançant des processus divers
 */
const { spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "."]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`Le processus s'est terminée avec le code ${code}`);
});
