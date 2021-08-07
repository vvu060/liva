import React from "react";
import Banner from "./Banner";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";

/**
 * Factory function to create a shallowWrapper for Banner component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Banner {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-banner");
  expect(component.length).toBe(1);
});

test("renders `image` passed as a prop", () => {
  const wrapper = setup({ image: "url" });
  const component = findByTestAttr(wrapper, "component-banner-image");
  expect(component.length).toBe(1);
});
