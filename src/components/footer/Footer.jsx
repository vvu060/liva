import React from "react";
import { LocationOnOutlined, MailOutlined } from "@material-ui/icons";
import Logo from "../logo/Logo";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer data-test="component-footer" className={style.footer}>
      <div className={style.footer__top}>
        <div className="container">
          <div className="row">
            <div
              data-test="footer-info"
              className={`col-xs-12 col-sm-4 col-md-6 col-lg-6 ${style.footer__column}`}
            >
              <Logo
                width={100}
                alt="Liva Logo"
                className={style.footer__logo}
              />
              <p className={style.footer__companyDesc}>
                Agricultural Products at your doorstep
              </p>
              <div role="list" className={style.footer__list}>
                <div className={style.footer__item}>
                  <LocationOnOutlined />
                  Whitefield, Bengaluru
                </div>
                <div className={style.footer__item}>
                  <MailOutlined />
                  info@liva.com
                </div>
              </div>
            </div>
            <div
              className={`col-xs-12 col-sm-4 col-md-3 col-lg-3 ${style.footer__column}`}
              data-test="footer-links"
            >
              <h4 className={style.footer__title}>Information</h4>
              <div className={style.footer_links} role="list">
                <a href="#" role="listitem">
                  My Account
                </a>
                <a href="#" role="listitem">
                  Order History
                </a>
                <a href="#" role="listitem">
                  Contact Us
                </a>
                <a href="#" role="listitem">
                  Terms &amp; Conditions
                </a>
                <a href="#" role="listitem">
                  Privacy
                </a>
              </div>
            </div>

            <div
              className={`col-xs-12 col-sm-4 col-md-3 col-lg-3 ${style.footer__column}`}
              data-test="footer-links"
            >
              <h4 className={style.footer__title}>My Account</h4>
              <div className={style.footer_links} role="list">
                <a href="#" role="listitem">
                  About Us
                </a>
                <a href="#" role="listitem">
                  Specials
                </a>
                <a href="#" role="listitem">
                  FAQ
                </a>
                <a href="#" role="listitem">
                  Guarantee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer__bottom} data-test="footer-bottom">
        <div className="container">
          Copyright &copy; 2021 | Liva all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
