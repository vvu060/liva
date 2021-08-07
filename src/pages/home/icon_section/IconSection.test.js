import React from "react";
import { shallow } from "enzyme";
import IconSection from "./IconSection";
import { findByTestAttr } from "../../../test/testUtils";

test("renders the Icon Section component without crashing", () => {
  const wrapper = shallow(<IconSection />);
  const component = findByTestAttr(wrapper, "component-icon-section");
  expect(component.length).toBe(1);
});

test("renders the Icon component three times", () => {
  const wrapper = shallow(<IconSection />);
  const component = findByTestAttr(wrapper, "component-icon");
  expect(component.length).toBe(3);
});
