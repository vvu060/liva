import React from "react";
import { shallow } from "enzyme";
import Icon from "./Icon";
import { findByTestAttr, checkProps } from "../../../../test/testUtils";

const setup = (props = {}) => {
  return shallow(<Icon {...props} />);
};

test("renders without error", () => {
  const wrapper = setup({
    Icon: "Icon",
    title: "Online Shopping",
    desc: "Online Shopping 24/7",
  });
  const component = findByTestAttr(wrapper, "component-icon");
  expect(component.length).toBe(1);
});

describe("renders icon element", () => {
  test("does not render icon when `Icon` prop is not available", () => {
    const wrapper = setup({ Icon: "" });
    const icon = findByTestAttr(wrapper, "element-icon");
    expect(icon.text()).toBe("");
  });

  test("renders icon when `Icon` prop is available", () => {
    const wrapper = setup({ Icon: Icon });
    const icon = findByTestAttr(wrapper, "element-icon");
    expect(icon.text().length).not.toBe(0);
  });
});

describe("renders title text", () => {
  test("does not render text when `title` prop is not available", () => {
    const wrapper = setup({ title: "" });
    const title = findByTestAttr(wrapper, "element-title");
    expect(title.text()).toBe("");
  });

  test("renders title when `title` prop is available", () => {
    const wrapper = setup({ title: "Online Shopping" });
    const title = findByTestAttr(wrapper, "element-title");
    expect(title.text().length).not.toBe(0);
  });
});

describe("renders desc text", () => {
  test("does not render text when `desc` prop is not available", () => {
    const wrapper = setup({ desc: "" });
    const description = findByTestAttr(wrapper, "element-desc");
    expect(description.text()).toBe("");
  });

  test("renders text when `desc` prop is available", () => {
    const wrapper = setup({ desc: "Online Shopping 24/7" });
    const description = findByTestAttr(wrapper, "element-desc");
    expect(description.text().length).not.toBe(0);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = {
    title: "Online Shopping",
    desc: "Online Shopping 24/7",
  };
  checkProps(Icon, expectedProps);
});
