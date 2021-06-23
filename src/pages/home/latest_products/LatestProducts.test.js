import React from "react";
import { shallow } from "enzyme";
import LatestProducts from "./LatestProducts";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const setup = (props = {}) => {
  return shallow(<LatestProducts {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-latest-products");
  expect(component.length).toBe(1);
});
