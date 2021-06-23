import React from "react";

const Button = ({ color, disabled, children, label, className }) => {
  return (
    <button
      data-test="component-button"
      className={`${className ? className : ""}`}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;
