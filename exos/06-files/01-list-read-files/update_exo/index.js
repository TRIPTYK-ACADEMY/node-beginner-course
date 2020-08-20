const fs = require('fs');
require('colors');
const directory = 'public';

fs.readdir(`./${directory}`, (err, public) => {
  if(err) throw error;

  console.log(`\n Le dossier '${directory}' contient les fichiers suivants: \n`)

  public.forEach( async file => {
    await fs.readFile(`./${directory}/${file}`, 'utf-8', (error, content) => {
      if(error) throw error;
      console.log(`-> Le fichier ${file}`.cyan);
      console.log('----------\n');
      console.log(content);
      console.log('\n----------\n');
    })
  });
})