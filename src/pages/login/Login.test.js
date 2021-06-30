import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

const setup = () => {
  return shallow(<Login />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
