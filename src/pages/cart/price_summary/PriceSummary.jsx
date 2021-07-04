import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import {
  selectCartItems,
  selectTotalAmount,
} from "../../../redux/features/cart/cartSlice";
import style from "./PriceSummary.module.scss";
import { selectUserEmail } from "../../../redux/features/user/userSlice";
import { generateCheckoutToken } from "../../../helpers/generateCheckoutToken";
import { checkoutSession } from "../../../helpers/checkoutSession";

const PriceSummary = () => {
  const totalAmount = useSelector(selectTotalAmount);

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
      <div className={style.price__button}></div>
    </div>
  );
};

export default PriceSummary;
