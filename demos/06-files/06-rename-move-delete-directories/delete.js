const fs = require('fs');

try {
  fs.rmdirSync('./renamed-directory');
}
catch(e) {
  console.log(e.message);
}



// const fs = require('fs');
// const path = require('path');

// try {
//   let dir = './public'
//   fs.readdirSync(dir).forEach((filename) => {
//     let file = path.join(dir, filename);
//     fs.unlinkSync(file);
//   })
//   fs.rmdirSync(dir);
// }
// catch(e) {
//   console.log(e.message);
// }