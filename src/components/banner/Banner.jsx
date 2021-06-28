import React, { useEffect, useState } from "react";
import style from "./Banner.module.scss";
const Banner = () => {
  return (
    <section
      data-test="component-banner"
      className={`block ${style.banner}`}
      role="banner"
      style={{ background: `url(banner-1.jpg) no-repeat bottom center`, backgroundSize: `cover` }}
    >
      <div className={`container ${style.banner__container}`}>
        <h1 className={style.banner__title} tabIndex="0">
          <span>Welcome to</span>
          LIVA
        </h1>
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English
        </p>
        <a className={`btn btn-border btn-light ${style.banner__btn}`}>
          Discover
        </a>
      </div>
    </section>
  );
};

export default Banner;
