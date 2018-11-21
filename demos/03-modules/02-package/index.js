require('colors');
try {
  let test = 'String to test';
  test.relace('test', 'break');
}
catch(e) { console.log(e.message.red); };