import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { checkoutSession } from "../../helpers/checkoutSession";
import { generateCheckoutToken } from "../../helpers/generateCheckoutToken";
import { selectCartItems } from "../../redux/features/cart/cartSlice";
import { selectUserEmail } from "../../redux/features/user/userSlice";
import { openSidebar } from "../../redux/features/sidebar/sidebarSlice";

import style from "./Address.module.scss";

const Address = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const items = useSelector(selectCartItems);
  const cartId = localStorage.getItem("cart_id")
    ? localStorage.getItem("cart_id")
    : "";
  const checkoutTokenId = localStorage.getItem("checkoutTokenId");

  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payment, setPayment] = useState("online");

  /**
   * Function to handle shipping address form submission.
   * @function handleSubmit
   * @param {event} e - takes the event as parameter.
   * @returns {} submits form.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userEmail) {
      dispatch(openSidebar({ sidebar: true }));
    } else {
      localStorage.setItem(
        "shipping_address",
        JSON.stringify({
          name,
          address1,
          address2,
          city,
          state,
          pincode,
          payment,
          phoneNumber,
        })
      );
      if (payment === "online") {
        checkoutSession(items, userEmail);
      } else {
        history.push("./payment?success=true");
      }
    }
  };

  useEffect(() => {
    if (!checkoutTokenId) {
      /**
       * Function to generate commerce JS checkout token.
       * @function generateCheckoutToken
       * @param {cartId} - takes the cartId as parameter.
       * @returns {token} - returns the checkout token.
       */
      generateCheckoutToken(cartId);
    }
  }, []);

  return (
    <form
      data-test="component-address"
      className={style.form}
      onSubmit={handleSubmit}
    >
      <h2>Shipping Address</h2>
      <div data-test="name-field" className={style.form__group}>
        <input
          type="text"
          className={style.form__control}
          value={name}
          required
          placeholder="Enter Full Name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label className={style.form__label} htmlFor="name">
          Full Name
        </label>
      </div>
      <div data-test="phoneNumber-field" className={style.form__group}>
        <input
          type="number"
          value={phoneNumber}
          className={style.form__control}
          minLength="10"
          maxLength="12"
          required
          placeholder="Enter Phone Number"
          id="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label className={style.form__label} htmlFor="phoneNumber">
          Mobile Number
        </label>
      </div>
      <div data-test="address1-field" className={style.form__group}>
        <input
          type="text"
          className={style.form__control}
          value={address1}
          placeholder="Address Line 1"
          required
          id="address1"
          onChange={(e) => setAddress1(e.target.value)}
        />
        <label className={style.form__label} htmlFor="address1">
          Address Line 1
        </label>
      </div>
      <div data-test="address2-field" className={style.form__group}>
        <input
          type="text"
          className={style.form__control}
          value={address2}
          placeholder="Address Line 2"
          id="address2"
          onChange={(e) => setAddress2(e.target.value)}
        />
        <label className={style.form__label} htmlFor="address2">
          Address Line 2
        </label>
      </div>
      <div data-test="city-field" className={style.form__group}>
        <input
          type="text"
          value={city}
          className={style.form__control}
          placeholder="Enter City"
          id="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={style.form__label} htmlFor="city">
          City
        </label>
      </div>
      <div data-test="pincode-field" className={style.form__group}>
        <input
          type="text"
          value={pincode}
          className={style.form__control}
          placeholder="Enter Pin Code"
          id="pincode"
          onChange={(e) => setPincode(e.target.value)}
        />
        <label className={style.form__label} htmlFor="pincode">
          Pin Code
        </label>
      </div>
      <div data-test="state-field" className={style.form__group}>
        <label htmlFor="state" className={style.form__selectLabel}>
          State
        </label>
        <select
          className={style.form__control}
          name="state"
          id="state"
          value={state}
          required
          onChange={(e) => setState(e.target.value)}
        >
          <option value="karnataka">Karnataka</option>
          <option value="maharashtra">Maharashtra</option>
        </select>
      </div>
      <div data-test="payment-field" className={style.form__radio}>
        <span>Payment</span>
        <div className={style.form__radioInput}>
          <label htmlFor="cod" className={style.form__radioLabel}>
            <input
              type="radio"
              name="cod"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            COD
          </label>
          <label htmlFor="online" className={style.form__radioLabel}>
            <input
              type="radio"
              name="online"
              value="online"
              checked={payment === "online"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Online
          </label>
        </div>
      </div>

      <button
        data-test="checkout-button"
        type="submit"
        className="btn btn-primary"
      >
        {userEmail ? "Checkout" : "Sign in To Continue"}
      </button>
    </form>
  );
};

export default Address;
