import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return <footer className={style.footer}>
    this is footer
    <div className={style.footer__bottom}>
      this is copy right
    </div>
  </footer>;
};

export default Footer;
