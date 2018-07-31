const AskManager = function() {

  let responses = [], cursor = 0;
  
  const questions = [
    'What\'s your name ? \n', 
    'What\'s your favorite animal ? \n',
    'What\'s your favorite color ? \n'
  ];

  const init = function() {
    listen();
    ask();
  };

  const ask = function() {
    process.stdout.write(questions[cursor]);
  };
  
  const listen = function() {
    process.stdout.write('We listen the terminal\n');
    process.stdin.on('data', function(data) {
      responses.push(data); 
      cursor++;
      cursor < ( questions.length ) ? ask() : resume();
    });
  };

  const resume = function() {
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

  let self = this;
  self.init = init;

  return self;
};

global.utils = {};
global.utils.AskManager = AskManager();

utils.AskManager.init();