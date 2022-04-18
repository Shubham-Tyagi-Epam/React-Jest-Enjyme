import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByAttr } from "../testUtils";
import { checkPropTypes } from "prop-types";
import PropTypes from "prop-types";

/**
 * Function to have a the component with desired props to be shallowly rendered.
 * @function
 * @param {object}
 * @returns - a shallow wrapper around the component with the required props.
 */
function setup(props = {}) {
  let setupProps = { success: false, ...props };
  return shallow(<Congrats {...setupProps} />);
}

it("renders congrats component correctly", () => {
  let propError = checkPropTypes(
    { success: PropTypes.bool.isRequired },
    {},
    "prop",
    Congrats.name
  );
  console.log("propError --- " + propError);
  expect(propError).toBeUndefined();
  let wrapper = setup();
  let selector = findByAttr(wrapper, "component-congrats");
  //   expect(selector.length).toBe(1);
});

it("renders success message when true props are passed", () => {
  let wrapper = setup({ success: true });
  let selector = findByAttr(wrapper, "congrats-message");
  expect(selector.length).toBe(1);
});

it("the component should be empty when the sucess prop is false", () => {
  let wrapper = setup({ success: false });
  expect(wrapper.text.length).toBe(0);
});
