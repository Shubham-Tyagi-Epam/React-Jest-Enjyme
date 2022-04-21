import { guessWord } from "./actions";
import { storeFactory } from "./testUtils";

describe("Test the action and reducers together", () => {
  const secretWord = "party";

  describe("When no previous guessed words ", () => {
    let store;
    let initialState = { secretWord: secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    //   const initialState =
    test("when current guess is incorrect", () => {
      store.dispatch(guessWord("train"));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });
    test("When current guess is correct", () => {
      store.dispatch(guessWord("party"));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: "party", letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("When there are previously guessed words ", () => {
    let store;
    let initialState = {
      secretWord: secretWord,
      success: false,
      guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
    };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("when current guess is incorrect", () => {
      let guessedWords = store.getState().guessedWords;
      store.dispatch(guessWord("part"));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: "part", letterMatchCount: 4 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("When current guess is correct", () => {
      let guessedWords = store.getState().guessedWords;
      store.dispatch(guessWord("party"));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: "party", letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
