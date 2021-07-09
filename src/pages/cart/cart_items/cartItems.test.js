import React from "react";
import { shallow } from "enzyme";
import CartItems from "./CartItems";
import { findByTestAttr } from "../../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const setup = () => {
  return shallow(<CartItems />);
};

test("renders cart items without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-cartItems");
  expect(component.length).toBe(1);
});

test("renders my cart text ", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-items");
  expect(component.length).toBe(1);
});
