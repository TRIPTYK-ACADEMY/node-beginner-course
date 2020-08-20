module.exports = () => {

  let responses = [], cursor = 0;
  
  const questions = [
    'What\'s your name ? \n', 
    'What\'s your favorite animal ? \n',
    'What\'s your favorite color ? \n'
  ];

  const init = () => {
    listen();
    ask();
  };

  const ask = () => {
    process.stdout.write(questions[cursor]);
  };
  
  const listen = () => {
    process.stdout.write('We listen the terminal\n');
    process.stdin.on('data', data => {
      responses.push(data); 
      cursor++;
      cursor < ( questions.length ) ? ask() : resume();
    });
  };

  const resume = () => {
    let loopCycle = questions.length;
    let i = 0;
    process.stdout.write('------------------------- \n');
    process.stdout.write('Resume of the interview : \n');
    process.stdout.write('------------------------- \n');
    for(i ; i < loopCycle ; i++) {
      process.stdout.write(responses[i]);
    }
    process.stdout.write('Sorry dude, bad responses. \n');
    process.exit();
  };

  this.init = init;
  return this;
};