import Blog from "./Blog";
import { shallow } from "enzyme";

describe("Check Blog functional", () => {
  it("find using a css selector and then check", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".liCls").length).toBe(3);
  });

  it("check the value through a css selector", () => {
    let wrapper = shallow(<Blog />);
    // wrapper.find(".liCls").forEach((element) => {
    //   console.log(element.key());
    // });
    expect(wrapper.find(".liCls").at(0).key()).toBe("angular");
  });

  it("Child check through css selector", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".numbers").childAt(0).type()).toBe("span");
  });

  it("check number of list elements in ul tag", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find("ul").children().length).toBe(3);
  });

  it("Check if a class exists on an element", () => {
    let wrapper = shallow(<Blog />);
    // We have two ways(may be more) to check that
    //1
    expect(wrapper.find(".my-button").exists(".disabled")).toBeTruthy();
    //2
    expect(wrapper.find(".my-button").hasClass("disabled")).toBeTruthy();
  });
});
