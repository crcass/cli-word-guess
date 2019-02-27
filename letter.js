class Letter {
  constructor(char) {
    this.char = char;
    this.charGuessed = false;

    this.guessLetter = () => {
      if (this.charGuessed) {
        return this.char;
      } else {
        return '_';
      }
    };

    this.handleGuess = letter => {
      if (this.charGuessed) {
        return this.charGuessed = true;
      } else if (letter === this.char) {
        return this.charGuessed = true;
      } else {
        return this.charGuessed = false;
      }
    };
  }
}

module.exports = Letter;
