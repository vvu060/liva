import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import { findByTestAttr } from "../../test/testUtils";

const defaultProps = {
  disabled: false,
  name: "Add to Cart",
  label: "test-label",
  classes: "btn-primary",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Button {...setupProps} />);
};

describe("renders button component", () => {
  test("renders the button element without crashing", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-button");
    expect(component.length).toBe(1);
  });
});

describe("renders button name", () => {
  test("does not render button name when `name` props is not available", () => {
    const wrapper = setup({ name: "" });
    const name = findByTestAttr(wrapper, "component-button");
    expect(name.text()).toBe("");
  });

  test("renders button  name when `name` props is available", () => {
    const wrapper = setup({ name: "Add to Cart" });
    expect(wrapper.text()).toEqual("Add to Cart");
  });
});
