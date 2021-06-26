import defaultuser from "../../resources/defaultuser.png";
import PropTypes from "prop-types";
import style from './Avatar.module.scss';
const Avatar = ({ src ,alt,classes}) => {
  return <img src={src} alt={alt} className={`${style.avatar} ${classes}`} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  class: PropTypes.string
};

Avatar.defaultProps = {
  src: defaultuser,
  alt: 'Profile Image',
  classes: ''
};

export default Avatar;