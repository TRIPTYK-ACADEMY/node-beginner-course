// Output simple
process.stdout.write('Hello World\n');

// Ecoute sur l'événement data
process.stdin.on('data', function(data) {
  process.stdout.write('Data received\n');
  process.stdout.write(data);
});