/**
 * On utilise process.stdin qui est le flux d'entrée du terminal.
 */

process.stdin.on('data', (data) => {
  console.log(`📝 Vous avez écrit quelque chose dans le terminal : ${data}`);
});