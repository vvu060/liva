import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { endpoints, headersPublic } from "../../endpoints";
import {
  selectUserEmail,
  selectUserFirstName,
  selectUserLastName,
} from "../../redux/features/user/userSlice";
import { CheckCircle, Cancel } from "@material-ui/icons";
import Button from "../../components/button/Button";
import LatestProducts from "../home/latest_products/LatestProducts";
import { useLocation } from "react-router-dom";
import style from "./Payment.module.scss";

const Payment = () => {
  const cartId = localStorage.getItem("cart_id");
  const checkoutTokenId = localStorage.getItem("checkoutTokenId");
  const checUserId = localStorage.getItem("chec_user_id");
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const userEmail = useSelector(selectUserEmail);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");
  const location = useLocation();

  console.log({ location });

  const getCartItems = () => {
    fetch(`${endpoints.cart}/${cartId}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalAmount(data.subtotal.formatted_with_symbol);
        setCartItems(data.line_items);
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

  const captureOrder = () => {
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
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(cartItems);

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
        <Button
          name="Go to my orders"
          classes="btn btn-primary"
          onClick={captureOrder}
        />
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
