const Word = require('./word.js');
const inquirer = require('inquirer');

const presidents = [
  'taft',
  'wilson',
  'harding',
  'coolidge',
  'hoover',
  'roosevelt',
  'truman',
  'eisenhower',
  'kennedy',
  'johnson',
  'nixon',
  'ford',
  'carter',
  'reagan',
  'bush',
  'clinton'
];

let randomPrez = presidents[Math.floor(Math.random() * presidents.length)];
let currentPrez = new Word(randomPrez);

// console.log(currentPrez);

playGame = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Guess a letter',
        name: 'letter'
      }
    ])
    .then(answers => {
      currentPrez.checkLetters(answers.letter);
      console.log(currentPrez.displayWord());
      playGame();
    });
};

console.log(`
        *** Hail to the Chief! ***
  Try to guess the President's last name!
  `);

console.log(currentPrez.displayWord());

playGame();
