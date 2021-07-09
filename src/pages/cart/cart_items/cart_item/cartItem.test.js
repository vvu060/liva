import React from "react";
import { shallow } from "enzyme";
import CartItem from "./CartItem";
import { findByTestAttr, checkProps } from "../../../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const defaultProps = {
  name: "Carrot Seeds",
  image:
    "https://cdn.chec.io/merchants/28500/assets/oMT4MY6wdR6TCIpX|Red-Gajar.jpg",
  price: 88,
  totalPrice: 88,
  lineItemId: "item_7RyWOwmK5nEa2V",
  qty: 1,
  productId: "prod_bO6J5apRyXoEjp",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CartItem {...setupProps} />);
};

test("renders cart item without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-cartItem");
  expect(component.length).toBe(1);
});

describe("renders product name", () => {
  test("does not render product name when `name` props is not available", () => {
    const wrapper = setup({ name: "" });
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text()).toBe("");
  });

  test("renders product name when `name` props is available", () => {
    const wrapper = setup({ name: "Carrot Seeds" });
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text().length).not.toBe(0);
  });
});

describe("renders product image", () => {
  test("does not render product image when `image` props is not available", () => {
    const wrapper = setup({ image: "" });
    expect(wrapper.find("img").prop("image")).toBeUndefined();
  });

  test("renders product image when `image` props is available", () => {
    const wrapper = setup({
      image:
        "https://cdn.chec.io/merchants/28500/assets/oMT4MY6wdR6TCIpX|Red-Gajar.jpg",
    });
    expect(wrapper.find("img").length).toEqual(1);
  });
});

describe("renders product price", () => {
  test("does not render product price when `price` props is not available", () => {
    const wrapper = setup({ price: "" });
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.text()).toBe("");
  });

  test("renders product price when `price` props is available", () => {
    const wrapper = setup({ price: 150.0 });
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.text().length).not.toBe(0);
  });
});

describe("renders product quantity", () => {
  test("does not render product quantity when `quantity` props is not available", () => {
    const wrapper = setup({ quantity: "" });
    const quantity = findByTestAttr(wrapper, "product-quantity");
    expect(quantity.text()).toBe("");
  });

  test("renders product quantity when `quantity` props is available", () => {
    const wrapper = setup({ quantity: 1 });
    const quantity = findByTestAttr(wrapper, "product-quantity");
    expect(quantity.text().length).not.toBe(null);
  });
});

describe("renders product totalPrice", () => {
  test("does not render product totalPrice when `totalPrice` props is not available", () => {
    const wrapper = setup({ totalPrice: "" });
    const totalPrice = findByTestAttr(wrapper, "product-totalPrice");
    expect(totalPrice.text()).toBe("");
  });

  test("renders product totalPrice when `totalPrice` props is available", () => {
    const wrapper = setup({ totalPrice: 150.0 });
    const totalPrice = findByTestAttr(wrapper, "product-totalPrice");
    expect(totalPrice.text().length).not.toBe(0);
  });
});

test("renders remove item button", () => {
  const wrapper = setup();
  const removeButton = findByTestAttr(wrapper, "remove-button");
  expect(removeButton.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(CartItem, expectedProps);
});
