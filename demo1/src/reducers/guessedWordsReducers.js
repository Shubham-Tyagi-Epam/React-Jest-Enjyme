import { GUESS_WORD } from "../constants/guessConstants";

let initialState = [];

export const guessedWordsReducers = (state = initialState, action) => {
  //   console.log(action.type);
  switch (action.type) {
    case GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
