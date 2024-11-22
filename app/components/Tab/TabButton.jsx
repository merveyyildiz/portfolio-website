import React from "react";
import css from "./TabButton.module.scss";
import cx from "classnames";

const TabButton = ({ isActive, selecTab, children }) => {
  return (
    <button onClick={selecTab}>
      <p
        className={cx(css.text, {
          [css.active]: isActive,
          [css.passive]: !isActive,
        })}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
