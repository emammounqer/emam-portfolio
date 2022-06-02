import React, { useEffect, useRef, useState } from "react";
import styles from "./TopNavBar.module.scss";
import { useInView } from "../../hooks/useInView";
import { NavState } from "./NavBar";

interface props {
  navState: string;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
}
export const TopNavBar: React.FC<props> = ({ setNavState }) => {
  const { ref, isInView, entry } = useInView<HTMLDivElement>();

  useEffect(() => {
    if (isInView) setNavState("top");
    else setNavState("side");
  }, [isInView]);

  return (
    <nav className={styles.container} ref={ref}>
      <img src="./img/logo.svg" alt="logo" className={styles.logo} />

      <ul className={styles.navLinks} role="list">
        <div className={styles.links}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </div>
        <div className={styles.secLinks}>
          <li>
            <a href=""> Resume </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default TopNavBar;
