import React from "react";
import Button from "../../../components/button/Button";
import style from "./PriceSummary.module.scss";

const PriceSummary = () => {
  return (
    <div className={`block ${style.price}`}>
      <h2>Price Details</h2>
      <div className={style.price__details}>
        <div className={style.price__detail}>
          Total Product Price(4) <p>₹1500</p>
        </div>
        <div className={style.price__detail}>
          Shipping Cost <p>₹100</p>{" "}
        </div>
        <div className={style.price__detail}>
          Total Amount <p>₹1600</p>{" "}
        </div>
      </div>
      <div className={style.price__button}>
        <Button name="Checkout" classes="btn btn-primary" disabled={false} />
      </div>
    </div>
  );
};

export default PriceSummary;
