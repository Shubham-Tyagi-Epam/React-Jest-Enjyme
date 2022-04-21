import App from "./App";

jest.mock("./actions");

// import { getSecretWord } from "./actions";
import { getSecretWord } from "./actions";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { storeFactory } from "./testUtils";

const setup = () => {
  // use mount because use effect is not called on shallow
  let store = storeFactory({ success: false });
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("renders Without any errors", () => {});

describe("get secret word", () => {
  beforeEach(() => {
    getSecretWord.mockClear();
  });
  test("Get secret word on app mount", () => {
    const wrapper = setup();
    expect(getSecretWord).toHaveBeenCalledTimes(1);
  });

  test("Get secret word on app update", () => {
    const wrapper = setup();
    getSecretWord.mockClear();
    // use setProps because using wrapper.update() does not trigger the update of the component
    wrapper.setProps();
    expect(getSecretWord).toHaveBeenCalledTimes(0);
  });
});
