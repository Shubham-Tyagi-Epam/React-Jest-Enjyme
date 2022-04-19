import PropTypes from "prop-types";

/**
 * This is a React functional component for all the guessed words by the user
 * @function
 * @param - An array of the object ({guessedWords,matchcingLength})  and the length of the matching letters in that guesswords
 * @returns - A {JSX.element}, a table if there are some guessed words a string of no guessed words
 */

let GuessedWords = function ({ guessedWords }) {
  if (guessedWords.length == 0) {
    return (
      <div data-test="component-guessed-words">
        <div data-test="message">Guess any word.</div>
      </div>
    );
  } else {
    let data = guessedWords.map((guess, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>{guess.guessedWord}</td>
          <td>{guess.matchingLength}</td>
        </tr>
      );
    });
    return (
      <div data-test="component-guessed-words">
        <table
          data-test="guessed-words"
          className="table mt-3 border border-dark w-100 text-center"
        >
          <thead className="bg-secondary  text-white">
            <tr>
              <td>Guessed Word</td>
              <td>Matching Length</td>
            </tr>
          </thead>
          {data}
        </table>
      </div>
    );
  }
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      matchingLength: PropTypes.number,
    })
  ),
};

export default GuessedWords;
