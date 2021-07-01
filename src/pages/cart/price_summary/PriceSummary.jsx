import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import { endpoints, headersPublic } from "../../../endpoints";
import {
  selectCartItems,
  selectTotalAmount,
} from "../../../redux/features/cart/cartSlice";
import style from "./PriceSummary.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import { selectUserEmail } from "../../../redux/features/user/userSlice";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PriceSummary = () => {
  const cartId = localStorage.getItem("cart_id")
    ? localStorage.getItem("cart_id")
    : "";
  let checkoutTokenId = localStorage.getItem("checkoutTokenId");
  const totalAmount = useSelector(selectTotalAmount);
  const items = useSelector(selectCartItems);
  const userEmail = useSelector(selectUserEmail);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const headers = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

    const transformedItems = items[0].line_items.map((item) => ({
      price_data: {
        currency: "INR",
        product_data: {
          name: item.product_name,
        },
        unit_amount: item.price.raw * 100,
      },
      quantity: item.quantity,
    }));

    const body = {
      items: transformedItems,
      email: userEmail,
    };

    // Call the backend to create a checkout session...
    const checkoutSession = await axios.post(
      "http://localhost:5000/create-checkout-session",
      body,
      headers
    );

    // Redirect user/customer to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
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
          onClick={createCheckoutSession}
        />
      </div>
    </div>
  );
};

export default PriceSummary;
