import React, { Fragment } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import style from "./Order.module.scss";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  console.log(order);
  return (
    <div data-test="component-order" className={style.order}>
      {order && (
        <Fragment>
          <div className={style.order__details}>
            <div className={style.order__detail}>
              <p>Order Placed</p>
              <p data-test="created-date">
                {moment.unix(order.created).format("DD MMM YYYY")}
              </p>
            </div>

            <div className={style.order__detail}>
              <p>Total</p>
              <p data-test="order-total">
                {order.order_value.formatted_with_symbol}
              </p>
            </div>

            <div className={style.order__id}>
              <p data-test="order-id">Order ID: {order.id}</p>
              <p>{order.order.line_items.length} Items</p>
            </div>
          </div>

          <div className={style.order__info}>
            <div className={style.order__cart}>
              {order.order.line_items.map((item) => (
                <Link to={`/products/${item.product_name}/${item.product_id}`}>
                  <div className={style.order__items}>
                    <p data-test="product-name">{item.product_name}</p>
                    <p data-test="product-price">
                      {item.price.formatted_with_symbol}
                    </p>
                    <p data-test="product-quantity">{item.quantity}</p>
                    <p data-test="product-total">
                      {item.line_total.formatted_with_symbol}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className={style.order__address}>
              <h5>Shipping Address</h5>
              <p data-test="shipping-name">{order.shipping.name}</p>
              <p data-test="shipping-street">{order.shipping.street}</p>
              <p data-test="shipping-street2">{order.shipping.street_2}</p>
              <p data-test="shipping-city">
                {order.shipping.town_city}{" "}
                <span data-test="shipping-pincode">
                  {order.shipping.postal_zip_code}
                </span>{" "}
              </p>
              <p data-test="shipping-state">{order.shipping.county_state}</p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
};

Order.defaultProps = {
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

export default Order;
