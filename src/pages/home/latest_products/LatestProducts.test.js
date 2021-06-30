import React from "react";
import { mount } from "enzyme";
import LatestProducts from "./LatestProducts";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return mount(<LatestProducts />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-latest-products");
  expect(component.length).toBe(1);
});

test("renders the Latest Product Shimmer component", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-shimmer");
  expect(component.length).toBe(6);
});
