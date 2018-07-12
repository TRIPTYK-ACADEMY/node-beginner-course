const fs = require('fs');

if(fs.existsSync('public/named-file.txt')) {
  fs.renameSync('public/named-file.txt', 'public/renamed-file.txt');
}
else {
  console.log('File public/named-file not found');
}