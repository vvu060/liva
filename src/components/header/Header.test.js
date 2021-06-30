import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => {
  return shallow(<Header />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
