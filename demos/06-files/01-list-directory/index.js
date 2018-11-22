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
  console.log('Files from 2nd call')
  console.log(files);
});

console.log('--- END Directory read asynchronously');

// ---------- Asynchrone

async function readDirectory() {

  console.log('--- START Asynchronous native mode with await without promise');

  let files = await fs.readdir('./');
  console.log('Files from 3nd call')
  console.log(files);

  console.log('--- END Directory read asynchronously');
}

readDirectory();

// ---------- Asynchrone traité synchrone

async function readDirectory2() {

  console.log('--- START Asynchronous native mode with await and promise');

  let list = await Reader('./');
  console.log('Files from 4th call')
  console.log(list);
  console.log('--- END Directory read asynchronously');
}

readDirectory2()