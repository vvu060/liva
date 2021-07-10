import React from "react";
import style from "./Fallback.module.scss";

const Fallback = () => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div
      data-test="component-fallback"
      className={`container  ${style.fallback}`}
    >
      <img
        data-test="fallback-image"
        src="https://image.freepik.com/free-vector/no-data-illustration-concept_108061-573.jpg"
        alt="Something went Wrong"
      />
      <h2 data-test="fallback-text">Oops! Something Went Wrong</h2>
      <p data-test="fallback-text">We deeply regret the inconvenience.</p>
      <button
        data-test="fallback-reload"
        className="btn btn-primary"
        onClick={refresh}
      >
        Reload
      </button>
    </div>
  );
};

export default Fallback;
