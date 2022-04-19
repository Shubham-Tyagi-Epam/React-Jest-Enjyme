import { getLetterMatchCount } from ".";

describe("Testing the get Letter Match Count function", () => {
  let secretWord = "party";
  test("When there is no matched letter", () => {
    expect(getLetterMatchCount(secretWord, "luled")).toBe(0);
  });

  test("When there are some matched letters", () => {
    expect(getLetterMatchCount(secretWord, "train")).toBe(3);
  });

  test("When all the letters matches", () => {
    expect(getLetterMatchCount(secretWord, "party")).toBe(5);
  });

  test("When there are duplicate letters", () => {
    expect(getLetterMatchCount(secretWord, "trana")).toBe(3);
  });
});
