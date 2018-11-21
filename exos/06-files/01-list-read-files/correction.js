const fs = require('fs');

try {
  fs.readdir('./public', (error, files) => {
    if(error) throw error;
    files.forEach( (file) => {
      console.log(`We read the file : ${file}`);
      fs.readFile('./public/' + file, 'UTF-8', (err, f) => {
        if(err) throw err;
        console.log(f);
      });
    });
  });
}
catch(e)
{
  console.log(e.message);
}