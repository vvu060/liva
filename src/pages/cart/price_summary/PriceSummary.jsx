import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import { endpoints, headersPublic } from "../../../endpoints";
import { selectTotalAmount } from "../../../redux/features/cart/cartSlice";
import style from "./PriceSummary.module.scss";

const PriceSummary = () => {
  const cartId = localStorage.getItem("cart_id")
    ? localStorage.getItem("cart_id")
    : "";
  let checkoutTokenId = localStorage.getItem("checkoutTokenId");
  const totalAmount = useSelector(selectTotalAmount);

  let body = JSON.stringify({
    line_items: {},
    customer: {
      // id: "cstmr_7RyWOwmK5nEa2V",
      firstname: "vishal",
      lastname: "Urankar",
      email: "vvu060@gmail.com",
    },
    payment: {
      gateway: "stripe",
    },
  });

  const captureOrder = () => {
    fetch(`${endpoints.checkout}/${checkoutTokenId}`, {
      method: "POST",
      headers: headersPublic,
      body: body,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const generateCheckoutToken = () => {
    fetch(`${endpoints.checkout}/${cartId}?type=cart`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        checkoutTokenId = data.id;
        localStorage.setItem("checkoutTokenId", data.id);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (!checkoutTokenId) {
      generateCheckoutToken();
    }
  }, []);

  return (
    <div className={`block ${style.price}`}>
      <h2>Price Details</h2>
      <div className={style.price__details}>
        <div className={style.price__detail}>
          Total Product Price(4) <p>{totalAmount}</p>
        </div>
        <div className={style.price__detail}>
          Shipping Cost <p>₹100</p>{" "}
        </div>
        <div className={style.price__detail}>
          Total Amount <p>{totalAmount}</p>{" "}
        </div>
      </div>
      <div className={style.price__button}>
        <Button
          name="Checkout"
          classes="btn btn-primary"
          disabled={false}
          onClick={captureOrder}
        />
      </div>
    </div>
  );
};

export default PriceSummary;
