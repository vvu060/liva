import React from "react";
import { shallow } from "enzyme";
import IconSection from "./IconSection";

test("renders without crashing", () => {
  const wrapper = shallow(<IconSection />);
  expect(wrapper.exists()).toBe(true);
});
