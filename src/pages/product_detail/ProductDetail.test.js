import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "./ProductDetail";

const setup = () => {
  return shallow(<ProductDetail />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
