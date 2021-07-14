import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "./ProductDetail";
import { findByTestAttr, checkProps } from "../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const setup = (props = {}) => {
  return shallow(
    <ProductDetail
      match={{
        params: {
          productId: "prod_bO6J5appW9oEjp",
          name: "Cherry Tomato Seeds",
        },
      }}
    />
  );
};

test("renders product detail without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-product-detail");
  expect(component.length).toBe(1);
});

describe("renders product details", () => {
  test("does not render product name when loading is true", () => {
    const wrapper = setup();
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.length).toBe(0);
  });

  test("renders product name", () => {
    const wrapper = setup();
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.length).toBe(1);
  });

  test("does not render product price when loading is true", () => {
    const wrapper = setup();
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.length).toBe(0);
  });

  test("renders product price", () => {
    const wrapper = setup();
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.length).toBe(1);
  });

  test("does not render product rating when loading is true", () => {
    const wrapper = setup();
    const rating = findByTestAttr(wrapper, "product-rating");
    expect(rating.length).toBe(0);
  });

  test("renders product rating", () => {
    const wrapper = setup();
    const rating = findByTestAttr(wrapper, "product-rating");
    expect(price.length).toBe(1);
  });

  test("does not render product size when loading is true", () => {
    const wrapper = setup();
    const size = findByTestAttr(wrapper, "product-size");
    expect(size.length).toBe(0);
  });

  test("renders product size", () => {
    const wrapper = setup();
    const size = findByTestAttr(wrapper, "product-size");
    expect(size.length).toBe(1);
  });

  test("does not render product desc when loading is true", () => {
    const wrapper = setup();
    const desc = findByTestAttr(wrapper, "product-desc");
    expect(desc.length).toBe(0);
  });

  test("renders product desc", () => {
    const wrapper = setup();
    const desc = findByTestAttr(wrapper, "product-desc");
    expect(desc.length).toBe(1);
  });

  test("does not render product quantity when loading is true", () => {
    const wrapper = setup();
    const quantity = findByTestAttr(wrapper, "product-quantity");
    expect(quantity.length).toBe(0);
  });

  test("renders product quantity", () => {
    const wrapper = setup();
    const quantity = findByTestAttr(wrapper, "product-quantity");
    expect(quantity.length).toBe(1);
  });

  test("does not render product share when loading is true", () => {
    const wrapper = setup();
    const share = findByTestAttr(wrapper, "product-share");
    expect(share.length).toBe(0);
  });

  test("renders product share", () => {
    const wrapper = setup();
    const share = findByTestAttr(wrapper, "product-share");
    expect(share.length).toBe(1);
  });

  test("does not render product image when loading is true", () => {
    const wrapper = setup();
    const image = findByTestAttr(wrapper, "product-image");
    expect(image.length).toBe(0);
  });

  test("renders product image", () => {
    const wrapper = setup();
    const image = findByTestAttr(wrapper, "product-image");
    expect(image.length).toBe(1);
  });

  test("does not render product thumb when loading is true", () => {
    const wrapper = setup();
    const thumb = findByTestAttr(wrapper, "product-thumb");
    expect(thumb.length).toBe(0);
  });

  test("renders product thumb", () => {
    const wrapper = setup();
    const thumb = findByTestAttr(wrapper, "product-thumb");
    expect(thumb.length).toBe(1);
  });
});

describe("renders related products", () => {
  test("renders related products", () => {
    const wrapper = setup();
    const related = findByTestAttr(wrapper, "product-related");
    expect(related.length).toBe(1);
  });

  test("renders related products text", () => {
    const wrapper = setup();
    const relatedText = findByTestAttr(wrapper, "related-text");
    expect(relatedText.length).toBe(1);
  });
});
