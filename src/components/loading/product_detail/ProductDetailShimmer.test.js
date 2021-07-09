import React from "react";
import { shallow } from "enzyme";
import ProductDetailShimmer from "./ProductDetailShimmer";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<ProductDetailShimmer />);
};

test("renders shimmer without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-shimmer");
  expect(component.length).toBe(1);
});
