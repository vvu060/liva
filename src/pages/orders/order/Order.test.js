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
  const wrapper = setup({ defaultProps });
  const component = findByTestAttr(wrapper, "component-order");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(Order, expectedProps);
});
