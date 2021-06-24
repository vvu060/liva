import React from "react";
import { shallow } from "enzyme";
import ProductListing from "./ProductListing";

const setup = () => {
  return shallow(<ProductListing />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
