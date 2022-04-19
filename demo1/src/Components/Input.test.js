import { findByAttr } from "../testUtils";
import { shallow } from "enzyme";
import Input from "./Input";

function setup(secretWord = "party") {
  return shallow(<Input secretWord={secretWord} />);
}

test("The input component was loaded without any error", () => {
  let wrapper = setup("party");
  let comp = findByAttr(wrapper, "component-input");
  expect(comp.length).toBe(1);
});
