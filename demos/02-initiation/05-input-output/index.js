// Simple output
process.stdout.write('Hello World');

// Output branched on event listened
process.stdin.on('data', function(data) {
  process.stdout.write('Data received');
});