import ArticleClassComp from "./ArticleClassComp";
import { mount, shallow } from "enzyme";
import Table from "./Table";

describe("Article Page", () => {
  it("Check Class after clicking", () => {
    let wrapper = shallow(<ArticleClassComp />);
    expect(wrapper.find(".clicks-0").length).toBe(1);
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-2").length).toBe(1);
  });

  it("dive in Table Component", () => {
    let wrapper = shallow(<ArticleClassComp />);
    expect(wrapper.find(Table).dive().find(".custom-border").length).toBe(1);
  });
  it("Snapshot", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Mount vs Shallow", () => {
  it("Check how mount is different than shallow", () => {
    let wrapper = shallow(<ArticleClassComp />);
    // console.log(wrapper.debug());
  });
});
