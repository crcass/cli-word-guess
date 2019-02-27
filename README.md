# Hail to the Chief! - CLI
This is the CLI version of [Hail to the Chief!](https://crcass.github.io/hail/)

## Setting up the game
Once you clone the repo, be sure to navigate to the cloned folder in your terminal and run `npm i` to ensure you have the correct packages installed.

## Starting the game
Start the game by navigating to the cloned folder and running `node index`.
The answer key will automatically populate from the array, with _ replacing letters.
The game will prompt the user to choose a letter, and you submit your selection by pressing the Enter key.
Each letter submitted by the user will be checked against the answer and either replace _ in the answer key or push input to an array of unused letters.
As the user guesses incorrect letters, the number of remaining guesses will reduce.

## Winning (or Losing) the Game
If the user correctly guesses all the correct letters before the remaining guesses = 0, a win message will display.
If the user reduces the remaining letters to 0 before correctly guessing the answer, a game over message will display.

In either case, the user will be prompted to start a new game or exit. If the user choosed to continue, the game will reset, a new word will be chosen at random,  and the score with increment depending on the win or loss condition.

## Known Issues
* The user may enter more that one character as a guess, but any guesses longer than one character will be counted as incorrect

♥︎ cc