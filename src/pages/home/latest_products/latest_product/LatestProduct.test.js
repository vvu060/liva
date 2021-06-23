import React from "react";
import { shallow } from "enzyme";
import LatestProduct from "./LatestProduct";
import { findByTestAttr, checkProps } from "../../../../test/testUtils";

const setup = (props = {}) => {
  return shallow(<LatestProduct {...props} />);
};

test("renders without error", () => {
  const wrapper = setup({
    name: "Carrot Seeds",
    image:
      "https://cdn.chec.io/merchants/28500/assets/oMT4MY6wdR6TCIpX|Red-Gajar.jpg",
    price: "₹88",
  });
  const component = findByTestAttr(wrapper, "component-latest-product");
  expect(component.length).toBe(1);
});

describe("renders product name", () => {
  test("does not render product name when `name` props is not available", () => {
    const wrapper = setup({ name: "" });
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text()).toBe("");
  });

  test("renders product name when `name` props is available", () => {
    const wrapper = setup({ name: "Carrot Seeds" });
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text().length).not.toBe(0);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = {
    name: "Carrot Seeds",
    image:
      "https://cdn.chec.io/merchants/28500/assets/oMT4MY6wdR6TCIpX|Red-Gajar.jpg",
    price: "₹88",
  };
  checkProps(LatestProduct, expectedProps);
});
