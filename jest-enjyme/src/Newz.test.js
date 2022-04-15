import { mount, shallow } from "enzyme";
import Newz from "./Newz";

describe("Checking Newz component", () => {
  it("Checking checkBoxChecked() function", () => {
    let wrapper = shallow(<Newz />);
    // console.log(wrapper.debug());
    // let ins = wrapper.instance
    // console.log(wrapper.instance().checkBoxChecked(2, 3));
    expect(wrapper.instance().checkBoxChecked(2, 3)).toEqual({ id: 3 });
  });

  it("Check if a function is being called on clicking a button", () => {
    let wrapper = shallow(<Newz />);
    let spy = jest.spyOn(wrapper.instance(), "checkBoxChecked");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(spy).toHaveBeenCalledTimes(2);
    // console.log(wrapper.debug());
  });

  it("Mock a function value", () => {
    let wrapper = shallow(<Newz />);
    let mock = jest.spyOn(wrapper.instance(), "checkBoxChecked");
    mock.mockReturnValueOnce(20);
    console.log(mock());
  });

  it("Check to see if component Did mount and function within it is called when the component is mounted", () => {
    let wrapper = shallow(<Newz />);
    const instance = wrapper.instance();
    jest.spyOn(Newz.prototype, "componentDidMount");
    jest.spyOn(instance, "func");
    // let wrapper = shallow(<Newz />);
    shallow(<Newz />);
    instance.componentDidMount();
    // const instance = wrapper.instance();
    // expect(Newz.prototype.componentDidMount).toHaveBeenCalled();

    // jest.spyOn(instance,'componentDidMount');
    expect(instance.componentDidMount).toHaveBeenCalled();
    expect(instance.func).toHaveBeenCalledTimes(1);
    // return wrapper
    //   .instance()
    //   .loadData(1, 2)
    //   .then((data) => {
    //     console.log(data);
    //   });
  });

  // ---- this is how you can check an async function ---
  it("Check to see what is the output of our function which returns a promise object", () => {
    let wrapper = shallow(<Newz />);
    let instance = wrapper.instance();
    return instance.loadData().then((data) => {
      expect(data).toEqual({ me: 12 });
    });
  });

  it("Check State", () => {
    let wrapper = shallow(<Newz />);
    // console.log(wrapper.state());
    return wrapper
      .instance()
      .loadData()
      .then((data) => {
        expect(data).toEqual({ me: 12 });
        expect(wrapper.state().newzcount).toBe(50);
      });
  });

  it("check props", () => {
    let wrapper = shallow(<Newz />);
    let inputProps = wrapper.find("input").props();
    console.log(inputProps);
    let matchProp = {
      type: "text",
      id: "firstname",
      defaultValue: "codeimprove",
      name: "firstname",
    };
    expect(inputProps).toEqual(matchProp);
  });
});
