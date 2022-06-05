import React from "react";

import bgImg from "../../assets/img/layered-waves.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={`${styles.container}`}>
      <div className={`${styles.bgImg}`}>
        <img src={bgImg} alt="" />
      </div>
      <p>Design & Built by Emam Al Mounqer</p>
    </footer>
  );
};

export default Footer;
