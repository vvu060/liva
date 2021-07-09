import React from "react";
import { shallow } from "enzyme";
import OrderShimmer from "./OrderShimmer";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<OrderShimmer />);
};

test("renders shimmer without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-shimmer");
  expect(component.length).toBe(1);
});
