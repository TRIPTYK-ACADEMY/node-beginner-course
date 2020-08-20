const listen = () => {
  process.stdout.write('We listen the terminal\n');
  process.stdin.on('data', data => {
    console.log(data);
  });
};
listen();

