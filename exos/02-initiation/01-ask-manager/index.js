const questions = [
  'What\'s your name ? \n', 
  'What\'s your favorite animal ? \n',
  'What\'s your favorite color ? \n'
  ];

const responses = [];

let cursor = 0;

const ask = function() {
  process.stdout.write(questions[cursor]);
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

process.stdin.on('data', function(data) {
  responses.push(data); 
  cursor++;
  cursor < ( questions.length ) ? ask() : resume();
});

ask();