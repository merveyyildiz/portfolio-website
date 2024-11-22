import React from "react";
import css from "./Footer.module.scss";

const Footer= () => {
    return (
      <footer className={css.footer}>
        <div className={css.container}>
          <span>MYS</span>
          <p className={css.text}>All rights reserved.</p>
        </div>
      </footer>
    );
}

export default Footer;