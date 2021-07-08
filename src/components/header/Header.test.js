import React from "react";
import { mount } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => {
  return mount(<Header />);
};

test.skip("renders header component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-header");
  expect(component.length).toBe(1);
});

describe("renders header elements", () => {
  const wrapper = setup();

  test("renders logo component", () => {
    const componentLogo = findByTestAttr(wrapper, "component-logo");
    expect(componentLogo.length).toBe(1);
  });

  test("renders logo component", () => {
    const componentSearchbar = findByTestAttr(wrapper, "component-searchbar");
    expect(componentSearchbar.length).toBe(1);
  });

  test("renders cart icon", () => {
    const cartIcon = findByTestAttr(wrapper, "cart-icon");
    expect(cartIcon.length).toBe(1);
  });

  test("renders history icon", () => {
    const historyIcon = findByTestAttr(wrapper, "history-icon");
    expect(historyIcon.length).toBe(1);
  });

  test("renders avatar", () => {
    const avatar = findByTestAttr(wrapper, "avatar");
    expect(avatar.length).toBe(1);
  });
});
