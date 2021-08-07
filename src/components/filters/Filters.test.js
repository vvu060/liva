import React from "react";
import { shallow } from "enzyme";
import Filters from "./Filters";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => {
  return shallow(<Filters />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});
