import axios from "axios";
import { GUESS_SUCCESS, GUESS_WORD } from "../constants/guessConstants";
import { getLetterMatchCount } from "../helpers";

export const getSecretWord = () => {
  // return response error
  return axios.get("http://localhost:3000").then((response) => response.data);
};

export const guessWord = (current_guess_word) => (dispatch, getState) => {
  let lmc = getLetterMatchCount(current_guess_word, getState().secretWord);
  // console.log(getState(), lmc);
  dispatch({
    type: GUESS_WORD,
    payload: { guessedWord: current_guess_word, letterMatchCount: lmc },
  });
  if (lmc == getState().secretWord.length) dispatch(correctGuess());
  // console.log(getState());
};

export function correctGuess() {
  return {
    type: GUESS_SUCCESS,
  };
}
