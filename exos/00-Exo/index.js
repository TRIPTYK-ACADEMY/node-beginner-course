/**
 * 
 * 1. On supprime tous les fichiers qui contiennent le mot test dans son nom de fichier
 * 2. Lorsqu'on on a un argument "--yes" et qu'on a un autre paramètre avec un nom. On déplace tous les fichiers ayant le mot "machin" dans le dossier assets
 * 3. Avec le nom reçu en paramètre, on renomme les fichiers contenant "machin" avec le nom passé en paramètre. Automatiquement, on viendra ajouter une incrémentation à chaque renommage càd que si on a 3 fichiers machin on le réecrira comme ceci:
 * - machin1.txt / machin2.json / machin3.js
 * 
 */
const cleanup = require('./modules/cleanup');
const remove = require('./modules/remove');
require('colors');

let arg1 = process.argv[2] ? process.argv[2]:null;
let arg2 = process.argv[3] ? process.argv[3]:null;

if(arg1){
  if(!arg2){
    let errorNoArg = "Il n'y a pas de deuxième argument"
    console.log(errorNoArg.red);
  } else {
    if(arg1 == "--yes"){
      cleanup(arg2);
      remove();
    } else{
      let errorNoArg = "Le premier argument n'autorise pas l'action de nettoyage"
      console.log(errorNoArg.yellow);
    }
  }
} else {
  remove();
}
