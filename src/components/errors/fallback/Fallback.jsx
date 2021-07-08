import React from "react";
import style from "./Fallback.module.scss";

const Fallback = () => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className={`container  ${style.fallback}`}>
      <img
        src="https://image.freepik.com/free-vector/no-data-illustration-concept_108061-573.jpg"
        alt="Something went Wrong"
      />
      <h2>Oops! Something Went Wrong</h2>
      <p>We deeply regret the inconvenience.</p>
      <button className="btn btn-primary" onClick={refresh}>
        Reload
      </button>
    </div>
  );
};

export default Fallback;
