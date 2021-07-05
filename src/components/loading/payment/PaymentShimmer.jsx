import React from "react";
import style from "./PaymentShimmer.module.scss";

const PaymentShimmer = () => {
  return (
    <div
      data-test="component-shimmer"
      className={`${style.shimmer} container block`}
    >
      <div className={style.shimmer__wrapper}>
        <div className={`${style.shimmer__heading} ${style.animate}`}></div>
        <div className={`${style.shimmer__desc} ${style.animate}`}></div>
        <div className={`${style.shimmer__button} ${style.animate}`}></div>
      </div>
    </div>
  );
};

export default PaymentShimmer;
