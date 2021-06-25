import React from "react";

const Button = ({ disabled, name, label, classes, onClick }) => {
  return (
    <button
      data-test="component-button"
      className={`${classes ? classes : ""}`}
      disabled={disabled}
      aria-label={label}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
