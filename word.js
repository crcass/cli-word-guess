const Letter = require('./letter.js');

class Word {
  constructor(word) {
    this.word = word.split('').map(letter => {
      return new Letter(letter);
    });

    this.displayWord = () => {
      return this.word.map(letter => {
            return letter.guessLetter();
          }).join(' ');
    };

    this.checkLetters = letter => {
      this.word.forEach(char => {
        return char.handleGuess(letter);
      });
    };
  }
}

module.exports = Word;
