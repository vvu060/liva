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
    <section className="block">
      <div data-test="component-icon-section" className="container">
        <div className={`row`}>
          <div className="col-4">
            <Icon
              Icon={HeadsetMicOutlined}
              title="Online Support"
              desc="We Provide 24/7 Online Support"
            />
          </div>
          <div className="col-4">
            <Icon
              Icon={FlightTakeoffOutlined}
              title="Free Shipping"
              desc="Free Home Delivery"
            />
          </div>
          <div className="col-4">
            <Icon
              Icon={SecurityOutlined}
              title="Secure Payment"
              desc="Fully Secure Payment Service"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconSection;
