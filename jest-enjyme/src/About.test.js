import About from "./About";
import { shallow } from "enzyme";

describe("About component check", () => {
  it("class check", () => {
    let wrapper = shallow(<About />); // it returns a shallow wrapper object

    // console.log(wrapper.debug());
    // expect(wrapper.exists(".h1cls")).toBeTruthy();
  });
});
