const fs = require('fs');

// Synchrone

console.log('--- Synchronous native mode');

let content = fs.readFileSync('./public/contacts-triptyk.txt', 'UTF-8');

console.log(content);

// Asynchrone

console.log('--- Asynchronous native mode');

fs.readFile('./public/contacts-triptyk.txt', (error, file) => {
  console.log(file);
});

console.log('Read');

console.log("----------------");

fs.readdir('./public', (error, files) => {
  files.forEach( filename => {
    let stat = fs.statSync(filename);
    console.log(stat);
  })
});

fs.readdir('./public', (error, files) => {
  files.forEach( filename => {
    fs.readFile(filename, 'UTF-8', (error, content) => {
      console.log(content);
    })
  })
});

