import React from "react";

import Logo from "../../logo/Logo";

import style from "./Transition.module.scss";

const Transition = () => {
  return (
    <div data-test="component-transition" className={style.transition}>
      <Logo width={200} alt="Liva Logo" />
    </div>
  );
};

export default Transition;
