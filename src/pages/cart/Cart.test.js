import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";

const setup = () => {
  return shallow(<Cart />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
