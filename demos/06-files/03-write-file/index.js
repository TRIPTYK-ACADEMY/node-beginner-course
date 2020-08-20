const fs = require('fs');

const names = ['Pierre', 'Paul', 'Jacques'];
let output = '';

names.forEach( (name) => {
  output += `${name}\n`;
});

fs.writeFile('./contacts.txt', output, (error, file) => {
  console.log('File created');
});