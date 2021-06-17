import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import { findByTestAttr } from "../../test/testUtils";

describe("group1", () => {
  test("renders the button without crashing", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });

  test("renders the button element without crashing", () => {
    const wrapper = shallow(<Button />);
    const component = findByTestAttr(wrapper, "component-button");
    expect(component.length).toBe(1);
  });
});
