import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__top}>
        <div className="container">
          <div className="row">
                  footer top content goes here
          </div>
        </div>
      </div>
      <div className={style.footer__bottom} data-testid="footerbottom">
        <div className="container">
          Copyright &copy; 2021 liva all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
