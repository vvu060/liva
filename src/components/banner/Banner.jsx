import React from "react";
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
          <h2>-30% offer on Latest Products</h2>
          <button>Shop Now</button>
        </div>

        <div className={style.banner__right}>
          <img
            src="https://cdn.shopify.com/s/files/1/0011/9868/6266/files/1-3-601x534.png?v=1621424321"
            loading="lazy"
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
