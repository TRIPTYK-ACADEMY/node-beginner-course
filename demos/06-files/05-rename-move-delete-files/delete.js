const fs = require('fs');

try {
  fs.unlinkSync('./renamed-file.txt');
}
catch(e) {
  console.log(e.message);
}