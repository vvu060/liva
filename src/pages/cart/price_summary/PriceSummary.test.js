import React from "react";
import { shallow } from "enzyme";
import PriceSummary from "./PriceSummary";
import { findByTestAttr } from "../../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const setup = () => {
  return shallow(<PriceSummary />);
};

test("renders price summary without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-price-summary");
  expect(component.length).toBe(1);
});

describe("renders details without error", () => {
  test("renders total product price", () => {
    const wrapper = setup();
    const productPrice = findByTestAttr(wrapper, "product-price");
    expect(productPrice.length).toBe(1);
  });

  test("renders shipping price", () => {
    const wrapper = setup();
    const shippingPrice = findByTestAttr(wrapper, "shipping-price");
    expect(shippingPrice.length).toBe(1);
  });

  test("renders total  price", () => {
    const wrapper = setup();
    const totalPrice = findByTestAttr(wrapper, "total-price");
    expect(totalPrice.length).toBe(1);
  });
});
