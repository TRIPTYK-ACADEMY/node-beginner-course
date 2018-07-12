const fs = require('fs');

if(fs.existsSync('public')) {
  fs.mkdir('public', (error) => {
    if(error) throw error;
    console.log('Directory created');
  });
}
else {
  console.log('Directory public cannot be created : a directory with the same name already exists');
}