const fs = require('fs');

module.exports = (files, directory) => {
  files.forEach(file => {
    if(file.includes('test')){
      fs.unlinkSync(`./${directory}/${file}`)
    }
  });
}