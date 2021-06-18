import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__top}>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4">
              <h4 className={style.footer__title}>
                Footer title
              </h4>
            </div>

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
