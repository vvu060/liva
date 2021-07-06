import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
} from "../../../redux/features/cart/cartSlice";
import style from "./PriceSummary.module.scss";

const PriceSummary = () => {
  const totalAmount = useSelector(selectTotalAmount);
  const cartItems = useSelector(selectCartItems);

  return (
    <div className={`block ${style.price}`}>
      <h2>Price Details</h2>
      <div className={style.price__details}>
        <div className={style.price__detail}>
          <p>Total Product Price ({cartItems && cartItems.length})</p>
          <p className={style.price__amt}>₹{totalAmount + 100}</p>
        </div>
        <div className={style.price__detail}>
          Shipping Cost <p className={style.price__shipping}> - ₹100</p>{" "}
        </div>
        <div className={style.price__detail}>
          Total Amount <p className={style.price__amt}>₹{totalAmount}</p>{" "}
        </div>
      </div>
      <div className={style.price__button}></div>
    </div>
  );
};

export default PriceSummary;
