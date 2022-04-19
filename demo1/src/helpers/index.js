export function getLetterMatchCount(guessedWord, secretWord) {
  guessedWord = guessedWord.split("");
  let secreetWordSet = new Set(secretWord.split(""));
  return guessedWord.filter((letter) => {
    return secreetWordSet.has(letter);
  }).length;
}
