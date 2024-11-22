"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import css  from "./Navbar.module.scss";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className={css.navbar}>
      <div className={css.nav}>
        <Link href="#" className={css.brand}>
          Mys
        </Link>
        <div className={css.mobileMenu}>
          {!isNavbarOpen ? (
            <button onClick={() => setIsNavbarOpen(true)} className={css.btn}>
              <Bars3Icon className={css.icon} />
            </button>
          ) : (
            <button onClick={() => setIsNavbarOpen(false)} className={css.btn}>
              <XMarkIcon className={css.icon} />
            </button>
          )}
        </div>
        <div className={css.desktopMenu} id="navbar">
          <ul className={css.list}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
