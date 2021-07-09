import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "./ProductDetail";
import { findByTestAttr, checkProps } from "../../test/testUtils";

const setup = () => {
  return shallow(<ProductDetail />);
};

test("renders product detail without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-product-detail");
  expect(component.length).toBe(1);
});

describe("renders product name", () => {
  test("does not render product name when `name` props is not available", () => {
    const wrapper = setup();
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text()).toBe("");
  });

  test("renders product name when `name` props is available", () => {
    const wrapper = setup();
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text().length).not.toBe(0);
  });
});
