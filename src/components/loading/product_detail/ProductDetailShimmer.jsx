import React from "react";
import style from "./ProductDetailShimmer.module.scss";

const ProductDetailShimmer = ({ colSpace }) => {
  return (
    <div
      data-test="component-shimmer"
      className={`${style.shimmer} container col-${colSpace}`}
    >
      <div className={style.shimmer__wrapper}>
        <div className={`${style.shimmer__image} ${style.animate}`}></div>
        <div className={style.shimmer__details}>
          <div className={`${style.shimmer__detail} ${style.animate}`}></div>
          <div className={`${style.shimmer__detail} ${style.animate}`}></div>
          <div className={`${style.shimmer__desc} ${style.animate}`}></div>
          <div className={`${style.shimmer__detail} ${style.animate}`}></div>
          <div className={`${style.shimmer__detail} ${style.animate}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailShimmer;
