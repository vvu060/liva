import React from "react";
import PropTypes from "prop-types";

import style from "./Filters.module.scss";

const Filters = ({ name, image, id, parentCallback }) => {
  /**
   * Function to handle parent callback to send category Id to parent component.
   * @function handleCallback
   * @param {}
   * @returns {}
   */
  const handleCallback = () => {
    parentCallback(id);
    document
      .getElementBy("filters")
      .classList.replace(`${style.filters__current}`);
  };

  return (
    <a
      href="#"
      onClick={handleCallback}
      id="filters"
      className={`${style.filters}`}
    >
      <img src={image} loading="lazy" alt={name} />
      <h5>{name}</h5>
    </a>
  );
};

Filters.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parentCallback: PropTypes.func,
};

export default Filters;
