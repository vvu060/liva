import React from "react";

const Button = ({ color, disabled, name, label, classes }) => {
  return (
    <button
      data-test="component-button"
      className={`${classes ? classes : ""}`}
      disabled={disabled}
      aria-label={label}
    >
      {name}
    </button>
  );
};

export default Button;
