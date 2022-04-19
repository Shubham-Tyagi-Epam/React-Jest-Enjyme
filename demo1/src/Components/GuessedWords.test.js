import { shallow } from "enzyme";
import { findByAttr } from "../testUtils";
import GuessedWords from "./GuessedWords";

let defaultProps = { guessedWords: [] };
function setup(props) {
  let setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
}
describe("When there are no guessed words", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it("Component renders without any error", () => {
    let comp = findByAttr(wrapper, "component-guessed-words");
    // console.log(wrapper.debug());
    expect(comp.length).toBe(1);
  });
  it("Component renders with the message to guess words", () => {
    let comp = findByAttr(wrapper, "message");
    expect(comp.length).toBe(1);
  });
});

describe("When ther are guessed words", () => {
  let wrapper;
  let guessedWords = [
    {
      guessedWord: "party",
      matchingLength: 3,
    },
    {
      guessedWord: "lucky",
      matchingLength: 5,
    },
  ];
  beforeEach(() => {
    wrapper = setup({
      guessedWords: guessedWords,
    });
  });
  it("Component renders correctly", () => {
    let comp = findByAttr(wrapper, "component-guessed-words");
    // console.log(wrapper.debug());
    expect(comp.length).toBe(1);
  });
  it("Component renders the words when there are guessed words", () => {
    let comp = findByAttr(wrapper, "guessed-words");
    expect(comp.length).toBe(1);
  });
  it("The number of words guessed are equal to the number of words displayed", () => {
    let comp = findByAttr(wrapper, "guessed-word");
    expect(comp.length).toBe(guessedWords.length);
  });
});
