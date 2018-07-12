const fs = require('fs');

try {
  fs.readdir('./public', (error, files) => {
    if(error) throw error;
    files.forEach( (path) => {
      console.log(`We read the file ./public/${path}`);
      console.log(fs.statSync(`./public/${path}`));
      fs.readFile(`./public/${path}`, 'UTF-8', (err, file) => {
        if(err) throw err;
        console.log(file);
      });
    });
  });
}
catch(e) {
  console.log(e.message);
}