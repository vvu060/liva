import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr, checkProps } from "./test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

test("renders non-empty component without crashing", () => {
  const wrapper = mount(<App />);
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
