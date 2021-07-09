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
    <div data-test="component-price-summary" className={`block ${style.price}`}>
      <h2>Price Details</h2>
      <div className={style.price__details}>
        <div className={style.price__detail}>
          <p>Total Product Price ({cartItems && cartItems.length})</p>
          <p data-test="product-price" className={style.price__amt}>
            ₹{cartItems && totalAmount + 100}
          </p>
        </div>
        <div data-test="shipping-price" className={style.price__detail}>
          Shipping Cost{" "}
          <p className={style.price__shipping}> {cartItems && `- ₹100`}</p>{" "}
        </div>
        <div className={style.price__detail}>
          Total Amount{" "}
          <p data-test="total-price" className={style.price__amt}>
            ₹{cartItems && totalAmount}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
