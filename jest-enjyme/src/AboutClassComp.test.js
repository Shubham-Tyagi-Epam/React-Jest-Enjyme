import AboutClassComp from "./AboutClassComp";
import { shallow } from "enzyme";

describe("check About Class Component", () => {
  it("Check About Class Component", () => {
    let wrapper = shallow(<AboutClassComp />);
    console.log(wrapper.debug());
    // expect(wrapper.exists(".h1cls")).toBeTruthy();
    // expect(wrapper.state()).toStrictEqual({ name: `code improve`, id: 111 });
  });
  it("Check if we have a css selector for any html element ", () => {
    let wrapper = shallow(<AboutClassComp />);
    expect(wrapper.exists(".h1cls")).toBeTruthy();
  });

  it("Check if component has a particular state", () => {
    let wrapper = shallow(<AboutClassComp />);
    expect(wrapper.state()).toStrictEqual({ name: `code improve`, id: 111 });
  });

  it("Check if component contains a HTML node", () => {
    let wrapper = shallow(<AboutClassComp />);
    expect(wrapper.contains(<div className="h1cls">Hello</div>)).toBeTruthy();
  });

  it("Check only the msg that is being printed on the screen, we do not care about the class which is being applied to that msg", () => {
    let wrapper = shallow(<AboutClassComp />);
    expect(
      wrapper.containsAllMatchingElements([
        <div>Hello</div>,
        <div>
          About<div>Hello</div>
        </div>,
      ])
    ).toBeTruthy();
  });

  it("Check if any of the html element content exists in our component", () => {
    let wrapper = shallow(<AboutClassComp />);
    expect(
      wrapper.containsAnyMatchingElements([
        <div>Hello</div>,
        <div>
          tbout<div></div>
        </div>,
      ])
    ).toBeTruthy();
  });
});
