const fs = require('fs');
const Path = require('path');

let dir = "./public";

const remove = () => {
  fs.readdir(dir, (error, files) => {
    if(error) throw error;
    files.forEach( file => {
      if(file.includes('test')){
        console.log("rm = " + file);
        try{
          fs.unlinkSync(Path.join(dir, file));
        } catch(e){
          console.log(e);
        }
      }
    })
  })
}

module.exports = remove;