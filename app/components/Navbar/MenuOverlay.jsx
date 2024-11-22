import React from "react";
import NavLink from "./NavLink";
import css from "./Navbar.module.scss";

const MenuOverlay = ({ links }) => {
  return (
    <ul className={css.mobileLinks}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
