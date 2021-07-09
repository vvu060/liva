import React from "react";
import style from "./IconSection.module.scss";
import Icon from "./icon/Icon";
import {
  HeadsetMicOutlined,
  FlightTakeoffOutlined,
  SecurityOutlined,
} from "@material-ui/icons";

const IconSection = () => {
  return (
    <div data-test="component-icon-section" className="container block">
      <div className={`row ${style.icon__row}`}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Icon
            Icon={HeadsetMicOutlined}
            title="Online Support"
            desc="We Provide 24/7 Online Support"
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Icon
            Icon={FlightTakeoffOutlined}
            title="Free Shipping"
            desc="Free Home Delivery"
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Icon
            Icon={SecurityOutlined}
            title="Secure Payment"
            desc="Fully Secure Payment Service"
          />
        </div>
      </div>
    </div>
  );
};

export default IconSection;
