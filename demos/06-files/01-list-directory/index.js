const fs = require('fs');
const Util = require('util');
const Reader = Util.promisify(fs.readdir);

// ---------- Synchrone

console.log('--- START Synchronous native mode');

const list = fs.readdirSync('./');
console.log(list);
console.log('--- END Directory read synchronously');

// ---------- Asynchrone

console.log('--- START Asynchronous native mode');

fs.readdir('./', (error, files) => {
  console.log(files);
});

console.log('--- END Directory read asynchronously');

// ---------- Asynchrone

async function readDirectory() {

  console.log('--- START Asynchronous native mode');

  await fs.readdir('./', (error, files) => {
    console.log(files);
  });
  
  console.log('--- END Directory read asynchronously');
}

readDirectory();

// ---------- Asynchrone traité synchrone

async function readDirectory2() {

  console.log('--- START Asynchronous native mode');

  let test = await Reader('./');
  console.log(test);
  console.log('--- END Directory read asynchronously');
}

readDirectory2()