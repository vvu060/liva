import React from "react";
import "./Button.scss";

const Button = ({ color, disabled }) => {
  return (
    <div>
      <button
        data-test="component-button"
        className={`${color}`}
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
};

export default Button;
