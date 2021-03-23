const fs = require("fs");

const stream = fs.createReadStream("file.txt", "UTF-8");
const writestream = fs.createWriteStream("file-copy.txt", "UTF-8");

/**
 * On écrit dans le flux
 */
writestream.write("lol\n");

/**
 * Redirige le "flux" de stream de lecture vers le stream d'écriture avec pipe(). Dans ce cas-ci ça fera une copie du fichier
 */
stream.pipe(writestream);

/**
 * Le process.stdout (qui est le flux de sortie du terminal) est aussi un stream "writable", du coup vous pouvez écrire dedans, c'est ce que fait la fonction console.log
 */
process.stdout.write("Coucou, je suis une console\n");

/**
 * Process.stdin est également un flux en lecture, vous pouvez donc pipe son contenu dans un fichier.
 */
const terminalLogger = fs.createWriteStream("logger.log", "UTF-8");

process.stdin.pipe(terminalLogger);
