import React from "react";
import { useHistory } from "react-router-dom";
import fallbackCart from "../../../assets/images/fallbackCart.png";
import style from "./FallbackCart.module.scss";

const FallbackCart = () => {
  const history = useHistory();
  return (
    <div data-test="component-fallback-cart" className={style.fallbackCart}>
      <img src={fallbackCart} loading="lazy" alt="Something went wrong" />
      <h2>Your Cart is Empty</h2>
      <button onClick={() => history.push("/")} className="btn btn-primary">
        Continue Shopping
      </button>
    </div>
  );
};

export default FallbackCart;
