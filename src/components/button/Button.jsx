import React from "react";
import "./Button.scss";

const Button = ({ name, color, disabled }) => {
  return (
    <div>
      <button
        data-test="component-button"
        className={`${color}`}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
