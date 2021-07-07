import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { endpoints, headersPublic } from "../../endpoints";
import {
  selectUserEmail,
  selectUserFirstName,
  selectUserLastName,
} from "../../redux/features/user/userSlice";
import { cartItems } from "../../redux/features/cart/cartSlice";
import { CheckCircle, Cancel } from "@material-ui/icons";
import Button from "../../components/button/Button";
import LatestProducts from "../../components/latest_products/LatestProducts";
import { useHistory, useLocation } from "react-router-dom";
import style from "./Payment.module.scss";
import PaymentShimmer from "../../components/loading/payment/PaymentShimmer";

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
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");

  const location = useLocation();

  console.log({ location });

  const getCartItems = () => {
    setIsLoading(true);
    fetch(`${endpoints.cart}/${cartId}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalAmount(data.subtotal.formatted_with_symbol);
        setCartItems(data.line_items);
        captureOrder(data.line_items);
      })
      .catch((error) => console.error(error));
  };

  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      console.log({ obj, item });
      return {
        ...obj,
        [item[key]]: {
          quantity: item.quantity,
        },
      };
    }, initialValue);
  };

  const captureOrder = (cartItems) => {
    setIsLoading(true);

    const transformedLineItems = convertArrayToObject(cartItems, "id");
    console.log(transformedLineItems);

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
        // dispatch(cartItems([]));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(cartItems);

  if (isLoading) {
    return (
      <Fragment>
        <PaymentShimmer />
      </Fragment>
    );
  }

  if (location.search.includes("success")) {
    return (
      <main className={`container block ${style.payment}`}>
        <div className={style.payment__confirmation}>
          <CheckCircle className={style.payment__successIcon} />
          <h1>Thank You, your order has been confirmed!</h1>
        </div>
        <p>
          Thank you for shopping with us. We'll send a confirmation of item has
          shipped, if you would like to check the status of the order(s) please
          press the link below.
        </p>
        <button
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
          <Cancel className={style.payment__cancelIcon} />
          <h1>Payment Unsuccessful</h1>
        </div>
        <p>
          There was some problem while processing your payment. Apologies for
          the inconvenience. Please click the below button to try payment again.
        </p>
        <Button name="Try Again" classes="btn btn-primary" />
        <div className="block">
          <LatestProducts />
        </div>
      </main>
    );
  }
};

export default Payment;
