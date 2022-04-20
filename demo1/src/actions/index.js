import axios from "axios";
import { GUESS_SUCCESS } from "../constants/guessConstants";

export const getSecretWord = () => {
  // return response error
  return axios.get("http://localhost:3000").then((response) => response.data);
};

export function correctGuess() {
  return {
    type: GUESS_SUCCESS,
  };
}
