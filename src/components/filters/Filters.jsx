import React from "react";
import style from "./Filters.module.scss";

const Filters = ({ name, image, id, parentCallback }) => {
  const handleCallback = () => {
    parentCallback(id);
  };

  return (
    <div
      onClick={handleCallback}
      className={`${style.filters} ${style.filters__current}`}
    >
      <img src={image} loading="lazy" alt={name} />
      <h5>{name}</h5>
    </div>
  );
};

export default Filters;
