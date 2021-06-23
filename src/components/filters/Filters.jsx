import React from "react";
import style from "./Filters.module.scss";

const Filters = ({ name, id }) => {
  return (
    <div className="">
      <div className={`${style.filters}`}>
        <input type="radio" name={name} id={id} value={id} />
        <label htmlFor={name}>{name}</label>
      </div>
    </div>
  );
};

export default Filters;
