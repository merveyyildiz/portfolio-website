import React from "react";
import css from "./Tag.module.scss";

const Tag = ({ tagName }) => {
  return <span className={css.tag}>{tagName}</span>;
};

export default Tag;
