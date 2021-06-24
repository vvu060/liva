import React from "react";
import { shallow } from "enzyme";
import BreadCrumb from "./BreadCrumb";
import { findByTestAttr, checkProps } from "../../test/testUtils";

const defaultProps = {
  name: "Products",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BreadCrumb {...setupProps} />);
};

test("renders BreadCrumb component without error", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, "component-bread-crumb");
  expect(component.length).toBe(1);
});

describe("renders name prop", () => {
  //   test("does not render name when `name` prop is not available", () => {
  //     const wrapper = setup({ name: "" });
  //     const name = findByTestAttr(wrapper, "component-bread-crumb");
  //     expect(name.text()).toBe("");
  //   });

  test("renders name when `name` prop is available", () => {
    const wrapper = setup({ name: "Products" });
    const name = findByTestAttr(wrapper, "component-bread-crumb");
    expect(name.text().length).not.toBe(0);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(BreadCrumb, expectedProps);
});
