import React from "react";
import style from "./FallbackCart.module.scss";

const FallbackCart = () => {
  return (
    <div className={style.fallbackCart}>
      <img
        src="https://image.shutterstock.com/image-vector/vector-illustration-icon-shopping-concept-600w-502037047.jpg"
        alt=""
      />
    </div>
  );
};

export default FallbackCart;
