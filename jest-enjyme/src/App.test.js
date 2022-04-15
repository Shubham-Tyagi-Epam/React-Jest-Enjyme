// import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
let data = 10;
test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(data).toBe(10);
});
describe("Test App", () => {
  it("Test Hello", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(".middle").text()).toBe(
      "Hello World<ArticleClassComp />"
    );
  });
});
