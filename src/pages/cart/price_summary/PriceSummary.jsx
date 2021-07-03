import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import {
  selectCartItems,
  selectTotalAmount,
} from "../../../redux/features/cart/cartSlice";
import style from "./PriceSummary.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import { selectUserEmail } from "../../../redux/features/user/userSlice";
import { generateCheckoutToken } from "../../../helpers/generateCheckoutToken";
import { checkoutSession } from "../../../helpers/checkoutSession";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PriceSummary = () => {
  const cartId = localStorage.getItem("cart_id")
    ? localStorage.getItem("cart_id")
    : "";
  const checkoutTokenId = localStorage.getItem("checkoutTokenId");
  const totalAmount = useSelector(selectTotalAmount);
  const items = useSelector(selectCartItems);
  const userEmail = useSelector(selectUserEmail);

  const createCheckoutSession = () => {
    checkoutSession(items, userEmail);
  };

  useEffect(() => {
    if (!checkoutTokenId) {
      generateCheckoutToken(cartId);
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
          onClick={createCheckoutSession}
        />
      </div>
    </div>
  );
};

export default PriceSummary;
