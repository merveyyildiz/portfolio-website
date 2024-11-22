import Link from 'next/link';
import React from 'react'
import css from "./Navbar.module.scss";

const NavLink = ({href, title,}) => {
  return (
    <Link
      href={href}
      smooth="true"
      duration={500}
      className={css.navLink}
    >
      {title}
    </Link>
  );
}

export default NavLink;