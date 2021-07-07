import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr, checkProps } from "./test/testUtils";

test("renders non-empty component without crashing", () => {
  const wrapper = shallow(<App />);
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
