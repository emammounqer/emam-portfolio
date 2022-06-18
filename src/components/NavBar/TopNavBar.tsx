import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useInView } from "../../hooks/useInView";

import styles from "./TopNavBar.module.scss";
import { NavState } from "./NavBar";

import { navLinks } from "../../constant/navLinks";

interface props {
  navState: NavState;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
}

export const TopNavBar: React.FC<props> = ({ navState, setNavState }) => {
  const { ref, isInView, entry } = useInView<HTMLDivElement>();

  useEffect(() => {
    if (isInView) setNavState("top");
    else setNavState("side");
  }, [isInView]);

  return (
    <nav
      className={`
      ${styles.container} 
      ${navState === "side" ? styles.hidden : ""}`}
      ref={ref}
    >
      <img src="./img/logo.svg" alt="logo" className={styles.logo} />

      <ul className={styles.navLinks} role="list">
        <div className={styles.links}>
          {navLinks.selfLinks.map((link) => (
            <li key={"top" + link.title}>
              <Link
                className={`${styles.scrollLink} ${
                  link.title === "Home" ? styles.linkSelected : ""
                }`}
                to={link.link}
                smooth={true}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </div>
        <div className={`${styles.secLinks}`}>
          {navLinks.outerLinks.map((link) => (
            <li key={"top" + link.title}>
              <a href={link.link}>&#60; {link.title} /&#62;</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default TopNavBar;
