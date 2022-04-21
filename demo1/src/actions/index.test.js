import { correctGuess, getSecretWord } from ".";
import moxios from "moxios";
import { GUESS_SUCCESS } from "../constants/guessConstants";

describe("get secret word", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("secret word is returned", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});

// describe("Guess Success or failiure actions", () => {
//   test(" Guess Success ", () => {
//     const action = correctGuess();
//     expect(action).toEqual({
//       type: GUESS_SUCCESS,
//     });
//   });
// });
