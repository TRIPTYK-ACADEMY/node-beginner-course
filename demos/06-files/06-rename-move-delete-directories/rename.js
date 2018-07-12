const fs = require('fs');

if(fs.existsSync('./public/to-delete')) {
  fs.renameSync('./public/to-delete', './public/renamed-directory');
}
else {
  console.log('Directory ./public/to-delete not found');
}