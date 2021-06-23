import PropTypes from "prop-types";
import logoSrc from "../../resources/logo.png";

const Logo = ({ alt, width, height, className }) => {
  return (
    <img
      src={logoSrc}
      loading="lazy"
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Logo.defaultProps = {
  alt: "Company Logo",
  width: 50,
  height: "auto",
};
export default Logo;
