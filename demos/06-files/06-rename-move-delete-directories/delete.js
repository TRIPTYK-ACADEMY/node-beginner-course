const fs = require('fs');

try {
  fs.rmdirSync('./renamed-directory');
}
catch(e) {
  console.log(e.message);
}