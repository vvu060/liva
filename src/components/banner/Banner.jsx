import React from "react";

import bannerImage from "../../assets/images/bannerImage.png";

import style from "./Banner.module.scss";

const Banner = () => {
  return (
    <section
      data-test="component-banner"
      className={`block ${style.banner}`}
      role="banner"
    >
      <div className={`${style.banner__container}`}>
        <div className={style.banner__left}>
          <h4>Natural & Organic</h4>
          <h2>30% off on Latest Products</h2>
          <button>Shop Now</button>
        </div>

        <div className={style.banner__right}>
          <img src={bannerImage} loading="lazy" alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
