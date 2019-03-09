const Letter = require('./letter.js');

class Word {
  constructor(word) {
    this.word = word.split('').map(letter => new Letter(letter));

    this.displayWord = () =>
      this.word.map(letter => letter.guessLetter()).join(' ');

    this.checkLetters = letter =>
      this.word.forEach(char => char.handleGuess(letter));
  }
}

module.exports = Word;
