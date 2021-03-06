const Word = require('./word.js');
const inquirer = require('inquirer');
const chalk = require('chalk');

// array containing possible solutions
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

// variables to store session wins & losses
let wins = 0;
let losses = 0;

// main game logic
const playGame = () => {
  winCond = 0;

  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Guess a letter',
        name: 'letter'
      }
    ])
    .then(answers => {
      console.clear();
      console.log(`                           ${chalk.redBright('*')}${chalk.grey('*')}${chalk.blueBright('*')} ${chalk.bold('Hail to the Chief!')} ${chalk.blueBright('*')}${chalk.grey('*')}${chalk.redBright('*')}`);
      console.log(`                    Try to guess the President's last name!`);
      currentPrez.checkLetters(answers.letter);
      console.log(chalk`\n                                   {bold ${currentPrez.displayWord().toUpperCase()}}\n`);
      handleInput(answers.letter);
      if (winCond === currentPrez.word.length) {
        wins++;
        console.log(`${chalk.green.bold('You Win!')}\n`);
        console.log(`Wins: ${wins}, Losses: ${losses}\n`);
        handleRestart();
      } else if (lossCond <= 0) {
        losses++;
        console.log(`${chalk.red.bold('Game Over!')}\n`);
        console.log(`Wins: ${wins}, Losses: ${losses}\n`);
        handleRestart();
      } else {
        playGame();
      }
    });
};

// logic to handle user input
const handleInput = letter => {
  if (letter.length > 1) {
        console.log(`${chalk.red.bold('One guess at a time!')}`);
        console.log('---------------------\n');
        console.log(`Unused Letters: ${unused}\n`);
      } else if (!letter.match(/[A-Za-z]/g)) {
        console.log(`${chalk.red.bold('Letters only!')}`);
        console.log('---------------------\n');
        console.log(`Unused Letters: ${unused}\n`);
      } else if (unused.includes(letter.toUpperCase()) || used.includes(letter.toUpperCase())) {
        console.log(`${chalk.cyan.bold('You already guessed that!')}`);
        console.log('---------------------\n');
        console.log(`Unused Letters: ${unused}\n`);
      } else if (!currentPrez.displayWord().includes(letter)) {
        lossCond--;
        unused.push(letter.toUpperCase());
        console.log(`${chalk.red.bold('Incorrect Guess')}: ${lossCond} Remaining`);
        console.log('---------------------\n');
        console.log(`Unused Letters: ${unused}\n`);
      } else {
        for (var i = 0; i < currentPrez.word.length; i++) {
          if (currentPrez.word[i].charGuessed) {
            winCond++;
            used.push(letter.toUpperCase());
          }
        }
        console.log(`${chalk.green.bold('Correct')} - Good Guess!`);
        console.log('---------------------\n');
        console.log(`Unused Letters: ${unused}\n`);
      }
}

// logic to start a new game
const newGame = () => {
  console.clear();
  console.log(`                           ${chalk.redBright('*')}${chalk.grey('*')}${chalk.blueBright('*')} ${chalk.bold('Hail to the Chief!')} ${chalk.blueBright('*')}${chalk.grey('*')}${chalk.redBright('*')}`);
  console.log(`                    Try to guess the President's last name!`);
  randomPrez = presidents[Math.floor(Math.random() * presidents.length)];
  currentPrez = new Word(randomPrez);
  winCond = 0;
  lossCond = currentPrez.word.length + 4;
  unused = [];
  used = [];
  console.log(chalk`\n                                   {bold ${currentPrez.displayWord().toUpperCase()}}\n`);
  console.log('');
  console.log('---------------------\n');
  console.log('');
  playGame();
};

// logic to handle restarting the game
const handleRestart = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Would you like to play again?',
        name: 'restart'
      }
    ])
    .then(answers => {
      if (answers.restart) {
        newGame();
      } else {
        console.log(`\n${chalk.cyan.bold('Thanks for playing!')}\n`);
        return false;
      }
    })
}

// actually starts the game
newGame();
