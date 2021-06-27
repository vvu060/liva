import React from "react";
import style from "./LatestProductShimmer.module.scss";

const LatestProductShimmer = () => {
  return (
    <div
      data-test="component-shimmer"
      className={`${style.shimmer} container col-4`}
    >
      <div className={style.shimmer__wrapper}>
        <div className={`${style.shimmer__image} ${style.animate}`}></div>
        <div>
          <div className={`${style.shimmer__detail} ${style.animate}`}></div>
          <div className={`${style.shimmer__detail} ${style.animate}`}></div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductShimmer;
