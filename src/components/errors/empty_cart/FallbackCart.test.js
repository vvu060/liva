import React from "react";
import { shallow } from "enzyme";
import FallbackCart from "./FallbackCart";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<FallbackCart />);
};

test("renders shimmer without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-fallback-cart");
  expect(component.length).toBe(1);
});
