import React from "react";
import { useHistory } from "react-router-dom";
import style from "./FallbackCart.module.scss";

const FallbackCart = () => {
  const history = useHistory();
  return (
    <div data-test="component-fallback-cart" className={style.fallbackCart}>
      <img
        src="https://jersix.com/wp-content/uploads/2020/10/Empty-pana-uai-2000x1500.png"
        loading="lazy"
        alt="Something went wrong"
      />
      <h2>Your Cart is Empty</h2>
      <button onClick={() => history.push("/")} className="btn btn-primary">
        Continue Shopping
      </button>
    </div>
  );
};

export default FallbackCart;
