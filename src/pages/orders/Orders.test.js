import React from "react";
import { shallow } from "enzyme";
import Orders from "./Orders";

const setup = () => {
  return shallow(<Orders />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
