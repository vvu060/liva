import React from "react";
import { shallow } from "enzyme";
import LatestProduct from "./LatestProduct";
import { findByTestAttr, checkProps } from "../../../../test/testUtils";

const defaultProps = {
  name: "Carrot Seeds",
  image:
    "https://cdn.chec.io/merchants/28500/assets/oMT4MY6wdR6TCIpX|Red-Gajar.jpg",
  price: "₹88",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<LatestProduct {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
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

describe("renders product image", () => {
  test("does not render product image when `image` props is not available", () => {
    const wrapper = setup({ image: "" });
    expect(wrapper.find("img").prop("image")).toBeUndefined();
  });

  test("renders product image when `image` props is available", () => {
    const wrapper = setup({
      image:
        "https://cdn.chec.io/merchants/28500/assets/oMT4MY6wdR6TCIpX|Red-Gajar.jpg",
    });
    expect(wrapper.find("img").length).toEqual(1);
  });
});

describe("renders product price", () => {
  test("does not render product price when `price` props is not available", () => {
    const wrapper = setup({ price: "" });
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.text()).toBe("");
  });

  test("renders product price when `price` props is available", () => {
    const wrapper = setup({ price: "₹150.00" });
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.text().length).not.toBe(0);
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
