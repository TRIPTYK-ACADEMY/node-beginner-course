const fs = require('fs');
if(fs.existsSync('./public/renamed-directory')) {
  fs.renameSync('./public/renamed-directory', './');
}
else {
  console.log('Directory ./public/renamed-directory not found');
}