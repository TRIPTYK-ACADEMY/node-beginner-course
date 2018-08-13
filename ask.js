const questions = [
  "What's your name ? \n",
  "What's your favorite color ? \n",
  "What's your favorite animal ? \n"
];

const responses = [];

let cursor = 0; // Ceci va permettre de savoir où on en est dans le process

// Fonction qui pose la question
const ask = function() {
  process.stdout.write(questions[cursor]);
};

// Fonction qui affiche le résumé
const resume = function() {

  let stateIndex = questions.length;
  let i = 0;

  process.stdout.write('----- RESUME ----- \n');
  process.stdout.write('------------------ \n');
  // Boucle pour afficher les réponses
  for(i; i < stateIndex ; i++)
  {
   process.stdout.write(responses[i]); 
  }
  process.stdout.write('---------- \n');
  process.exit();
};

process.stdin.on("data", function(data) {
  responses.push(data);
  cursor++;
  // Je vérifie s'il reste des questions à afficher ou pas, si pas, j'affiche le résumé
  cursor < (questions.length) ? ask() : resume(); // Opérateur ternaire

  /*
  if(cursor < (questions.length) )
  {
    ask();
  }
  else 
  {
    resume();
  }
  */
});

ask();