import React from "react";
import { shallow, mount } from "enzyme";
import Sidebar from "./Sidebar";
import { findByTestAttr, checkProps } from "../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const defaultProps = {
  sidebar: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Sidebar {...setupProps} />);
};

test("renders sidebar component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-sidebar");
  expect(component.length).toBe(1);
});

describe("show sidebar only when sidebar prop is true", () => {
  test("does not show sidebar when sidebar prop is false", () => {
    const wrapper = setup({ sidebar: false });
    const sidebarHeader = findByTestAttr(wrapper, "sidebar-header");
    expect(sidebarHeader.length).toBe(0);
  });

  test("show sidebar when sidebar prop is true", () => {
    const wrapper = setup({ sidebar: true });
    const sidebarHeader = findByTestAttr(wrapper, "sidebar-header");
    expect(sidebarHeader.length).toBe(1);
  });

  test("does not show sidebar body when sidebar prop is false", () => {
    const wrapper = setup({ sidebar: false });
    const sidebarBody = findByTestAttr(wrapper, "sidebar-body");
    expect(sidebarBody.length).toBe(0);
  });

  test("show sidebar when sidebar body prop is true", () => {
    const wrapper = setup({ sidebar: true });
    const sidebarBody = findByTestAttr(wrapper, "sidebar-body");
    expect(sidebarBody.length).toBe(1);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(Sidebar, expectedProps);
});
