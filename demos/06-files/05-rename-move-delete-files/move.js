const fs = require('fs');
              
if(fs.existsSync('./public/renamed-file.txt')) {
  fs.renameSync('./public/renamed-file.txt', './');
}
else {
  console.log('File ./public/renamed-file not found');
}