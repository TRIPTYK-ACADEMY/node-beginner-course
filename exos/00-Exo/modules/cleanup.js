const fs = require('fs');
const Path = require('path');

const dir = "./public"
const newDir = "./assets"
let i = 1;

const cleanup = (arg) => {
  fs.readdir(dir, (error, files) => {
    if(error) throw error;
    files.forEach( file => {
      if(file.includes('machin')){
        let splitFile = file.split('.')
        console.log("move = " + file);
        fs.renameSync(Path.join(dir, file), Path.join(newDir, `${arg}${i}.${splitFile[1]}`))
        i++;
      }
    })
  })
}

module.exports = cleanup;