import React from "react";
import { shallow } from "enzyme";
import Order from "./Order";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = {
  version: "v1.5",
  sandbox: true,
  id: "ord_A12JwreLbylPjn",
  checkout_token_id: "chkt_0o3GeYQg0y3Pgo",
  cart_id: "cart_NwR1DZONBNjqKl",
  customer_reference: "LV-163807",
  created: 1625657197,
  status_payment: "paid",
  status_fulfillment: "fulfilled",
  currency: {
    code: "INR",
    symbol: "₹",
  },
  order_value: {
    raw: 176,
    formatted: "176.00",
    formatted_with_symbol: "₹176.00",
    formatted_with_code: "176.00 INR",
  },
  is: {
    free: false,
    fulfilled: true,
  },
  order: {
    subtotal: {
      raw: 176,
      formatted: "176.00",
      formatted_with_symbol: "₹176.00",
      formatted_with_code: "176.00 INR",
    },
    total: {
      raw: 176,
      formatted: "176.00",
      formatted_with_symbol: "₹176.00",
      formatted_with_code: "176.00 INR",
    },
    pay_what_you_want: {
      enabled: false,
      minimum: null,
      customer_set_price: null,
    },
    shipping: {
      id: null,
      description: null,
      provider: "chec",
      price: {
        raw: 0,
        formatted: "0.00",
        formatted_with_symbol: "₹0.00",
        formatted_with_code: "0.00 INR",
      },
    },
    line_items: [
      {
        id: "item_8XO3wpdkMZwYAz",
        product_id: "prod_QG375vRRaX5rMO",
        product_name: "Carrot Nantes Seeds",
        product_sku: "Size",
        quantity: 2,
        price: {
          raw: 88,
          formatted: "88.00",
          formatted_with_symbol: "₹88.00",
          formatted_with_code: "88.00 INR",
        },
        line_total: {
          raw: 176,
          formatted: "176.00",
          formatted_with_symbol: "₹176.00",
          formatted_with_code: "176.00 INR",
        },
        line_total_with_tax: {
          raw: 176,
          formatted: "176.00",
          formatted_with_symbol: "₹176.00",
          formatted_with_code: "176.00 INR",
        },
      },
    ],
  },
  shipping: {
    name: "Vishal",
    street: "Main St NY, fs",
    street_2: null,
    town_city: "Bengaluru",
    postal_zip_code: "560087",
    county_state: null,
    country: "IN",
    meta: null,
  },
  customer: {
    id: "cstmr_yA6nldm9nBwEWb",
    external_id: null,
    firstname: "Vishal",
    lastname: "Urankar",
    email: "vvu060forfirebase@gmail.com",
    phone: null,
    meta: null,
    created: 1625284859,
    updated: 1625284859,
  },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Order {...setupProps} />);
};

test("renders order component without error", () => {
  const wrapper = setup({ order: defaultProps });
  const component = findByTestAttr(wrapper, "component-order");
  expect(component.length).toBe(1);
});

describe("renders order created date", () => {
  test("does not render created date when `order` prop is not available", () => {
    const wrapper = setup({ order: {} });
    const createdDate = findByTestAttr(wrapper, "created-date");
    expect(createdDate.text()).toBe("");
  });

  test("renders created date when `order` prop is available", () => {
    const wrapper = setup({ order: defaultProps });
    const createdDate = findByTestAttr(wrapper, "created-date");
    expect(createdDate.text().length).not.toBe(0);
  });
});

describe("renders order total amount", () => {
  test("does not render order total amount when `order` prop is not available", () => {
    const wrapper = setup({ order: {} });
    const orderTotal = findByTestAttr(wrapper, "order-total");
    expect(orderTotal.text()).toBe("");
  });

  test("renders order total amount when `order` prop is available", () => {
    const wrapper = setup({ order: defaultProps });
    const orderTotal = findByTestAttr(wrapper, "order-total");
    expect(orderTotal.text().length).not.toBe(0);
  });
});

describe("renders order ID", () => {
  test("does not render order ID when `order` prop is not available", () => {
    const wrapper = setup({ order: {} });
    const orderId = findByTestAttr(wrapper, "order-id");
    expect(orderId.text()).toBe("");
  });

  test("renders order ID when `order` prop is available", () => {
    const wrapper = setup({ order: defaultProps });
    const orderId = findByTestAttr(wrapper, "order-id");
    expect(orderId.text().length).not.toBe(0);
  });
});

describe("renders product name", () => {
  test("does not render product name when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text()).toBe("");
  });

  test("renders product name when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const name = findByTestAttr(wrapper, "product-name");
    expect(name.text().length).not.toBe(0);
  });
});

describe("renders product price", () => {
  test("does not render product price when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.text()).toBe("");
  });

  test("renders product price when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const price = findByTestAttr(wrapper, "product-price");
    expect(price.text().length).not.toBe(0);
  });
});

describe("renders product quantity", () => {
  test("does not render product quantity when `order` props is not available", () => {
    const wrapper = setup();
    const quantity = findByTestAttr(wrapper, "product-quantity");
    expect(quantity.text()).toBe("");
  });

  test("renders product quantity when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const quantity = findByTestAttr(wrapper, "product-quantity");
    expect(quantity.text().length).not.toBe(0);
  });
});

describe("renders product total", () => {
  test("does not render product total when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const total = findByTestAttr(wrapper, "product-total");
    expect(total.text()).toBe("");
  });

  test("renders product total when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const total = findByTestAttr(wrapper, "product-total");
    expect(total.text().length).not.toBe(0);
  });
});

describe("renders shipping address name", () => {
  test("does not render shipping address name when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const shippingName = findByTestAttr(wrapper, "shipping-name");
    expect(shippingName.text()).toBe("");
  });

  test("renders shipping address name when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const shippingName = findByTestAttr(wrapper, "shipping-name");
    expect(shippingName.text().length).not.toBe(0);
  });
});

describe("renders shipping address street", () => {
  test("does not render shipping address street when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const shippingStreet = findByTestAttr(wrapper, "shipping-street");
    expect(shippingStreet.text()).toBe("");
  });

  test("renders shipping address street when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const shippingStreet = findByTestAttr(wrapper, "shipping-street");
    expect(shippingStreet.text().length).not.toBe(0);
  });
});

describe("renders shipping address street2", () => {
  test("does not render shipping address street2 when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const shippingStreet2 = findByTestAttr(wrapper, "shipping-street2");
    expect(shippingStreet2.text()).toBe("");
  });

  test("renders shipping address street2 when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const shippingStreet2 = findByTestAttr(wrapper, "shipping-street2");
    expect(shippingStreet2.text().length).not.toBe(0);
  });
});

describe("renders shipping address city", () => {
  test("does not render shipping address city when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const shippingCity = findByTestAttr(wrapper, "shipping-city");
    expect(shippingCity.text()).toBe("");
  });

  test("renders shipping address city when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const shippingCity = findByTestAttr(wrapper, "shipping-city");
    expect(shippingCity.text().length).not.toBe(0);
  });
});

describe("renders shipping address pincode", () => {
  test("does not render shipping address pincode when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const shippingPincode = findByTestAttr(wrapper, "shipping-pincode");
    expect(shippingPincode.text()).toBe("");
  });

  test("renders shipping address pincode when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const shippingPincode = findByTestAttr(wrapper, "shipping-pincode");
    expect(shippingPincode.text().length).not.toBe(0);
  });
});

describe("renders shipping address state", () => {
  test("does not render shipping address state when `order` props is not available", () => {
    const wrapper = setup({ order: {} });
    const shippingState = findByTestAttr(wrapper, "shipping-state");
    expect(shippingState.text()).toBe("");
  });

  test("renders shipping address state when `order` props is available", () => {
    const wrapper = setup({ order: defaultProps });
    const shippingState = findByTestAttr(wrapper, "shipping-state");
    expect(shippingState.text().length).not.toBe(null);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(Order, expectedProps);
});
