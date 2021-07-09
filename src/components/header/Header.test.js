import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import { findByTestAttr } from "../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const setup = () => {
  return mount(
    <Router>
      <Header />
    </Router>
  );
};

test("renders header component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-header");
  expect(component.length).toBe(1);
});

describe("renders header elements", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders logo component", () => {
    const componentLogo = findByTestAttr(wrapper, "component-logo");
    expect(componentLogo.length).toBe(1);
  });

  test("renders searchbar component", () => {
    const componentSearchbar = findByTestAttr(wrapper, "component-searchbar");
    expect(componentSearchbar.length).toBe(1);
  });

  test("renders header icons", () => {
    const headerIcons = findByTestAttr(wrapper, "header-icons");
    expect(headerIcons.length).toBe(1);
  });
});
