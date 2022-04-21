import { findByAttr, storeFactory } from "../testUtils";
import { mount, shallow } from "enzyme";
import Input from "./Input";
import React from "react";
import { Provider } from "react-redux";

const mockSetCurrentGuess = jest.fn();

jest.mock("React", () => ({
  ...jest.requireActual("React"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));
// useState: () => ["", mockSetCurrentGuess] : we can use this also if we want inside the jest.mock function but writing initialState as argument is better

function setup(success = false, secretWord = "party") {
  let store = storeFactory({ success: success });
  return mount(
    <Provider store={store}>
      <Input success={success} secretWord={secretWord} />
    </Provider>
  );
}

describe("Test the components when the sucess is either true or false", () => {
  describe("Success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    it("Component Renders Succuessfull", () => {
      let comp = findByAttr(wrapper, "component-input");
      expect(comp.length).toBe(1);
    });

    it("Input Box is not rendered", () => {
      let comp = findByAttr(wrapper, "input-box");
      expect(comp.exists()).toBeFalsy();
    });

    it("Submit button is not rendered", () => {
      let comp = findByAttr(wrapper, "submit-btn");
      expect(comp.exists()).toBeFalsy();
    });
  });
  describe("Success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    it("Component Renders Succesfull", () => {
      let comp = findByAttr(wrapper, "component-input");
      expect(comp.length).toBe(1);
    });

    it("Input box is rendered succesfullt", () => {
      let comp = findByAttr(wrapper, "input-box");
      expect(comp.exists()).toBeTruthy();
    });

    it("submit button is rendered succesfully", () => {
      let comp = findByAttr(wrapper, "submit-btn");
      expect(comp.exists()).toBeTruthy();
    });
  });
});

// test("The input component was loaded without any error", () => {
//   let wrapper = setup();
//   let comp = findByAttr(wrapper, "component-input");
//   expect(comp.length).toBe(1);
// });

describe("State controlled input feilds", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("state changes with value of input box upon changes", () => {
    /*
    This is another way of mocking the useState function, when we use React.useState() in our code, instead of doing the code destructuring
     
    const mockSetCurrentGuess = jest.fn();
     React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
     */
    const inputBox = findByAttr(wrapper, "input-box");
    const mockEvent = {
      target: {
        value: "train",
      },
    };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  it("setCurrentGuess gets called with empty string when we click on the submit button", () => {
    let submitBtn = findByAttr(wrapper, "submit-btn");
    let mockEvent = {
      preventDefault: () => {},
    };
    submitBtn.simulate("click", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
