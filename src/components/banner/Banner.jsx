import React, { useEffect, useState } from "react";
import style from "./Banner.module.scss";
const Banner = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => setNumber(Math.floor(Math.random() * 2) + 1));
  return (
    <section
      data-test="component-banner"
      className={`block ${style.banner}`}
      role="banner"
    >
      <div className={style.banner__wrap}>
        <div className={style.banner__left}>
          <h2>
          -45% Offer All  Products.
          </h2>
          <button className="btn btn-primary">
          shop now
          </button>
        </div>
        <div className={style.banner__right}>
          <img
            data-test="component-banner-image"
            src={`banner-${number}.png`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
