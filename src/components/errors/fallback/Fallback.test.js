import React from "react";
import { shallow } from "enzyme";
import Fallback from "./Fallback";
import { findByTestAttr } from "../../../test/testUtils";

const setup = () => {
  return shallow(<Fallback />);
};

test("renders fallback without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-fallback");
  expect(component.length).toBe(1);
});

describe("renders fallback component details", () => {
  test("renders fallback image", () => {
    const wrapper = setup();
    const fallbackImage = findByTestAttr(wrapper, "fallback-image");
    expect(fallbackImage.length).toBe(1);
  });

  test("renders fallback image", () => {
    const wrapper = setup();
    const fallbackImage = findByTestAttr(wrapper, "fallback-text");
    expect(fallbackImage.length).toBe(2);
  });

  test("renders fallback image", () => {
    const wrapper = setup();
    const reloadButton = findByTestAttr(wrapper, "fallback-reload");
    expect(reloadButton.length).toBe(1);
  });
});
