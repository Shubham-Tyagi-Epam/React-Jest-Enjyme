import { defaults } from "browserslist";
import { GUESS_FAILURE, GUESS_SUCCESS } from "../constants/guessConstants";

let initialState = false;

export const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS_SUCCESS:
      return true;
    case GUESS_FAILURE:
      return false;
    default:
      return state;
  }
};
