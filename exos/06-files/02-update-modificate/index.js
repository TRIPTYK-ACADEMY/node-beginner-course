/**
 * 
 * 1. On supprime tous les fichiers qui contiennent le mot test dans son nom de fichier
 * 2. Lorsqu'on on a un argument "--yes" et qu'on a un autre argument avec un nom. On déplace tous les fichiers ayant le mot "machin" dans le dossier assets. Si pas de nom, on affiche une erreur en ROUGE 
 * - node --yes ecma
 * 3. Avec le nom reçu en paramètre, on renomme les fichiers contenant "machin" avec le nom passé en paramètre. 
 * 4. On vient ajouter une incrémentation à chaque renommage càd que si on a 3 fichiers "ecma" on le réecrira comme ceci:
 * - ecma1.txt / ecma2.json / ecma3.js
 * 
 */

const fs = require('fs');
const directory = 'public';

const Remove = require(`${process.cwd()}/modules/removeFile`);
const MoveAndRename = require(`${process.cwd()}/modules/moveAndRename`);

const files = fs.readdirSync(`./${directory}`);

Remove(files, directory);
MoveAndRename(files, directory);
