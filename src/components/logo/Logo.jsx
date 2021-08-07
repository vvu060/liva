import PropTypes from "prop-types";

import logoSrc from "../../assets/images/logo.png";

import style from "./Logo.module.scss";

const Logo = ({ alt, width, height }) => {
  return (
    <img
      data-test="component-logo"
      className={style.logo}
      src={logoSrc}
      loading="lazy"
      alt={alt}
      width={width}
      height={height}
    />
  );
};

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Logo.defaultProps = {
  alt: "Company Logo",
  width: 50,
  height: "auto",
};

export default Logo;
