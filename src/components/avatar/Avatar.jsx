import defaultuser from "../../resources/defaultuser.png";
import PropTypes from "prop-types";
import style from './Avatar.module.scss';
const Avatar = ({ image ,title,classes}) => {
  return <img src={image} alt={title} className={`${style.avatar} ${classes}`}  data-test="component-avatar"/>;
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  class: PropTypes.string
};

Avatar.defaultProps = {
  image: defaultuser,
  title: 'Profile Image',
  classes: ''
};

export default Avatar;