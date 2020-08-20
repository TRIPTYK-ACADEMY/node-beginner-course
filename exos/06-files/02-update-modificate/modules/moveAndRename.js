const fs = require('fs');
const hasYes = require('../helpers/hasYes');

module.exports = (files, directory) => {
  if(hasYes()){
    const newDirectory = 'assets';
    let cursor = 1;
    files.forEach(file => {
      if(file.includes('machin')){
        const extension = file.split('.')[1];
        fs.renameSync(`./${directory}/${file}`, `./${newDirectory}/${process.argv[3]}${cursor}.${extension}`);
        cursor++;
      }
    })
  }
}