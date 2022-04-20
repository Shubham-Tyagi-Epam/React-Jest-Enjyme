import { GUESS_SUCCESS } from "../constants/guessConstants";
import { successReducer } from "./successReducer";

describe("test success reducer wuth success or failure action", () => {
  test("when previoues state is undefined and the action is empty", () => {
    const state = successReducer(undefined, {});
    expect(state).toEqual(false);
  });
  test("when previous state is false and the action is success ", () => {
    const state = successReducer(false, { type: GUESS_SUCCESS });
    expect(state).toEqual(true);
  });
  test("Guess previous state is false and the action is other ", () => {
    const state = successReducer(false, { type: "other" });
    expect(state).toEqual(false);
  });
});
