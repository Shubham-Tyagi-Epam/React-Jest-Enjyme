export function getLetterMatchCount(guessedWord, secretWord) {
  let guessedLetters = guessedWord.split("");
  let secretLetterSet = new Set(secretWord.split(""));
  return guessedLetters.filter((letter) => {
    return secretLetterSet.has(letter);
  }).length;
}
