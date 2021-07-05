import Button from "../button/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { checkoutSession } from "../../helpers/checkoutSession";
import { generateCheckoutToken } from "../../helpers/generateCheckoutToken";
import { selectCartItems } from "../../redux/features/cart/cartSlice";
import { selectUserEmail } from "../../redux/features/user/userSlice";
import style from "./Address.module.scss";

const Address = () => {
  const userEmail = useSelector(selectUserEmail);
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
  const items = useSelector(selectCartItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      address1,
      address2,
      city,
      state,
      pincode,
      phoneNumber,
    });
    checkoutSession(items, userEmail);
  };

  useEffect(() => {
    if (!checkoutTokenId) {
      generateCheckoutToken(cartId);
    }
  }, []);

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2>Sipping Address</h2>
      <div className={style.form__group}>
        <input
          type="text"
          className={style.form__control}
          value={name}
          placeholder="Enter Full Name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label className={style.form__label} htmlFor="name">
          Full Name *
        </label>
      </div>
      <div className={style.form__group}>
        <input
          type="number"
          value={phoneNumber}
          className={style.form__control}
          minlength={10}
          maxlength={12}
          placeholder="Enter Phone Number"
          id="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label className={style.form__label} htmlFor="phoneNumber">
          Mobile Number *
        </label>
      </div>
      <div className={style.form__group}>
        <input
          type="text"
          className={style.form__control}
          value={address1}
          placeholder="Address Line 1"
          id="address1"
          onChange={(e) => setAddress1(e.target.value)}
        />
        <label className={style.form__label} htmlFor="address1">
          Address Line 1 *
        </label>
      </div>
      <div className={style.form__group}>
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
      <div className={style.form__group}>
        <input
          type="text"
          value={city}
          className={style.form__control}
          placeholder="Enter City"
          id="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={style.form__label} htmlFor="city">
          City *
        </label>
      </div>
      <div className={style.form__group}>
        <input
          type="text"
          value={pincode}
          className={style.form__control}
          placeholder="Enter Pin Code"
          id="pincode"
          onChange={(e) => setPincode(e.target.value)}
        />
        <label className={style.form__label} htmlFor="pincode">
          Pin Code *
        </label>
      </div>
      <div className={style.form__group}>
        <label htmlFor="state">State *</label>
        <select
          className={style.form__control}
          name="state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="karnataka">Karnataka</option>
          <option value="maharashtra">Maharashtra</option>
        </select>
      </div>

      {/* <Button
        name="Checkout"
        classes="btn btn-primary"
        disabled={false}
        // onClick={handleSubmit}
      /> */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Address;
