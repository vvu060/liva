import React from "react";
import { mount } from "enzyme";
import ProductRow from "./ProductsRow";
import { findByTestAttr, checkProps } from "../../test/testUtils";

const defaultProps = {
  name: "Seasonal",
  category: "cat_ypbroEy01o8n4e",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(<ProductRow {...setupProps} />);
};

test("renders Product Row component without crashing", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-products-row");
  expect(component.length).toBe(1);
});

describe("renders category name", () => {
  test("does not render category name when `name` prop is not available", () => {
    const wrapper = setup({ name: "" });
    const name = findByTestAttr(wrapper, "category-name");
    expect(name.text()).toBe("");
  });

  test("renders category name when `name` prop is available", () => {
    const wrapper = setup({ name: "Seasonal" });
    const name = findByTestAttr(wrapper, "category-name");
    expect(name.text().length).not.toBe(0);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(ProductRow, expectedProps);
});
