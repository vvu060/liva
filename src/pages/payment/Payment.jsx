import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { endpoints, headersPublic } from "../../endpoints";
import {
  selectUserEmail,
  selectUserId,
  selectUserFirstName,
  selectUserLastName,
} from "../../redux/features/user/userSlice";

const Payment = () => {
  const cartId = localStorage.getItem("cart_id");
  const checkoutTokenId = localStorage.getItem("checkoutTokenId");
  const checUserId = localStorage.getItem("chec_user_id");
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const userEmail = useSelector(selectUserEmail);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");

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
        [item[key]]: { quantity: item.quantity },
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
        localStorage.removeItem("cart_id", "checkoutTokenId");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(cartItems);

  return (
    <div>
      <h1>Payment</h1>
      <button onClick={captureOrder}>Click Me</button>
    </div>
  );
};

export default Payment;
