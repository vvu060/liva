import React from "react";
import style from "./OrderShimmer.module.scss";

const OrderShimmer = ({ colSpace }) => {
  return (
    <div
      data-test="component-shimmer"
      className={`${style.shimmer} container col-${colSpace}`}
    >
      <div className={style.shimmer__wrapper}>
        <div className={`${style.shimmer__detail} ${style.animate}`}></div>
      </div>
    </div>
  );
};

export default OrderShimmer;
