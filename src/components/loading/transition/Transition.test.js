import React from "react";
import { shallow } from "enzyme";
import Transition from "./Transition";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<Transition />);
};

test("renders transition component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-transition");
  expect(component.length).toBe(1);
});
