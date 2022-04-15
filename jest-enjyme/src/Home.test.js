import Home from "./Home";
import { shallow } from "enzyme";

describe("shallow Home Page", () => {
  it("check if home class exists in the home component", () => {
    let wrapper = shallow(<Home />);
    // console.log(wrapper.debug());
    expect(wrapper.exists(".home")).toBeTruthy();
  });
});
