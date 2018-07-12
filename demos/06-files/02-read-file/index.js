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