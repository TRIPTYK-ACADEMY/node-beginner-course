const listen = function() {
  process.stdout.write('We listen the terminal\n');
  process.stdin.on('data', function(data) {
    console.log(data);
  });
};
listen();

