import React from "react";
import { shallow } from "enzyme";
import PaymentShimmer from "./PaymentShimmer";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<PaymentShimmer />);
};

test("renders shimmer without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-shimmer");
  expect(component.length).toBe(1);
});
