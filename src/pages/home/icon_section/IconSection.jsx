import React from "react";
import style from "./IconSection.module.scss";
import {
  HeadsetMicOutlined,
  FlightTakeoffOutlined,
  SecurityOutlined,
} from "@material-ui/icons";

const WhyUs = () => {
  return (
    <section className="block">
      <div data-test="component-icon-section" className="container">
        <div className="row">
          <div className={`col-4 ${style.whyus_item}}`}>
            <div className={style.whyus__item}>
              <div className={style.whyus__iconwrap}>
                <HeadsetMicOutlined classes={style.whyus__icon} />
              </div>
              <div className={style.whyus__descwrap}>
                <h3 className={style.whyus__title} data-test="element-title">
                  Online Support
                </h3>
                <p data-test="element-desc" className={style.whyus__desc}>
                  We Provide 24/7 Online Support
                </p>
              </div>
            </div>
          </div>
          <div className={`col-4 ${style.whyus_itemwrap}}`}>
            <div className={style.whyus__item}>
              <div className={style.whyus__iconwrap}>
                <FlightTakeoffOutlined classes={style.whyus__icon} />
              </div>
              <div className={style.whyus__descwrap}>
                <h3 className={style.whyus__title} data-test="element-title">
                  Free Shipping
                </h3>
                <p data-test="element-desc" className={style.whyus__desc}>
                  Free Home Delivery
                </p>
              </div>
            </div>
          </div>
          <div className={`col-4 ${style.whyus_item}}`}>
            <div className={style.whyus__item}>
              <div className={style.whyus__iconwrap}>
                <HeadsetMicOutlined classes={style.whyus__icon} />
              </div>
              <div className={style.whyus__descwrap}>
                <h3 className={style.whyus__title} data-test="element-title">
                  Online Support
                </h3>
                <p data-test="element-desc" className={style.whyus__desc}>
                  We Provide 24/7 Online Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
