import React from "react";

const Button = ({ disabled, name, label, classes, onClick, parameters }) => {
  return (
    <button
      data-test="component-button"
      className={`${classes ? classes : ""}`}
      disabled={disabled}
      aria-label={label}
      onClick={() => onClick(parameters)}
    >
      {name}
    </button>
  );
};

export default Button;
