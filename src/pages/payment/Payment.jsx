import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { CheckCircle, Cancel } from "@material-ui/icons";

import { endpoints, headersPublic } from "../../endpoints";
import {
  selectUserEmail,
  selectUserFirstName,
  selectUserLastName,
} from "../../redux/features/user/userSlice";
import { cartItems } from "../../redux/features/cart/cartSlice";

import Button from "../../components/button/Button";
import LatestProducts from "../../components/latest_products/LatestProducts";
import PaymentShimmer from "../../components/loading/payment/PaymentShimmer";

import style from "./Payment.module.scss";

const Payment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartId = localStorage.getItem("cart_id");
  const shippingAddress = JSON.parse(localStorage.getItem("shipping_address"))
    ? JSON.parse(localStorage.getItem("shipping_address"))
    : "";
  const checkoutTokenId = localStorage.getItem("checkoutTokenId");
  const checUserId = localStorage.getItem("chec_user_id");
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const userEmail = useSelector(selectUserEmail);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");
  const location = useLocation();

  /**
   * Function to fetch all cart items.
   * @function getCartItems
   * @param {}
   * @returns {} all cart items.
   */
  const getCartItems = () => {
    setIsLoading(true);
    fetch(`${endpoints.cart}/${cartId}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalAmount(data.subtotal.formatted_with_symbol);
        setItems(data.line_items);
        captureOrder(data.line_items);
      })
      .catch((error) => console.error(error));
  };

  /**
   * Function to array into an object.
   * @function convertArrayToObject
   * @param {array, key} - takes array to be converted and key as parameters.
   * @returns {obj} - new object.
   */
  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: {
          quantity: item.quantity,
        },
      };
    }, initialValue);
  };

  /**
   * Function to capture order after payment.
   * @function captureOrder
   * @param {items} - takes cart items as parameter.
   * @returns {obj} - order ID.
   */
  const captureOrder = (items) => {
    setIsLoading(true);

    const transformedLineItems = convertArrayToObject(items, "id");

    let body = JSON.stringify({
      line_items: transformedLineItems,
      extra_fields: {
        total_amount: totalAmount,
      },
      customer: {
        id: checUserId,
        firstname: userFirstName,
        lastname: userLastName,
        email: userEmail,
        meta: [shippingAddress.phoneNumber],
      },
      shipping: {
        name: shippingAddress.name,
        street: `${shippingAddress.address1}, ${shippingAddress.address2}`,
        town_city: shippingAddress.city,
        county_state: shippingAddress.state,
        postal_zip_code: shippingAddress.pincode,
        country: "IN",
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242424242424242",
          expiry_month: "02",
          expiry_year: "24",
          cvc: "123",
          postal_zip_code: "560087",
        },
      },
    });

    fetch(`${endpoints.checkout}/${checkoutTokenId}`, {
      method: "POST",
      headers: headersPublic,
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.removeItem("cart_id");
        localStorage.removeItem("checkoutTokenId");
        dispatch(cartItems());
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    userEmail && getCartItems();
  }, [userEmail]);

  if (isLoading) {
    return (
      <Fragment>
        <PaymentShimmer />
      </Fragment>
    );
  }

  if (location.search.includes("success")) {
    return (
      <main
        data-test="component-payment"
        className={`container block ${style.payment}`}
      >
        <div className={style.payment__confirmation}>
          <CheckCircle
            data-test="success-icon"
            className={style.payment__successIcon}
          />
          <h1 data-test="success-text">
            Thank You, your order has been confirmed!
          </h1>
        </div>
        <p data-test="success-message">
          Thank you for shopping with us. We'll send a confirmation of item has
          shipped, if you would like to check the status of the order(s) please
          press the link below.
        </p>
        <button
          data-test="order-button"
          name="Go to my orders"
          className="btn btn-primary"
          onClick={() => history.push("./orders")}
        >
          GO TO MY ORDERS
        </button>
        <div className="block">
          <LatestProducts />
        </div>
      </main>
    );
  }

  if (location.search.includes("canceled")) {
    return (
      <main className={`container block ${style.payment}`}>
        <div className={style.payment__confirmation}>
          <Cancel
            data-test="failure-icon"
            className={style.payment__cancelIcon}
          />
          <h1 data-test="failure-text">Payment Unsuccessful</h1>
        </div>
        <p data-test="failure-message">
          There was some problem while processing your payment. Apologies for
          the inconvenience. Please click the below button to try payment again.
        </p>
        <Button
          data-test="failure-button"
          name="Try Again"
          classes="btn btn-primary"
        />
        <div data-test="component-latest" className="block">
          <LatestProducts />
        </div>
      </main>
    );
  }
};

export default Payment;
