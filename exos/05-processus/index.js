const exec = require('child_process').exec;

exec('ls -l', function( error, stdout) {
  if(error) { throw error };
  console.log('Command executed');
  console.log(stdout);
});