import React from "react";
import style from "./Filters.module.scss";

const Filters = ({ name, image, id, parentCallback }) => {
  const handleCallback = () => {
    parentCallback(id);
    document
      .getElementById("filters")
      .classList.add(`${style.filters__current}`);
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

export default Filters;
