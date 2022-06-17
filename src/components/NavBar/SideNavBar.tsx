import React, { forwardRef, useEffect } from "react";
import { NavState } from "./NavBar";
import styles from "./SideNavBar.module.scss";

interface props {
  navState: string;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
}

export const SideNavBar: React.FC<props> = ({ navState }) => {
  return (
    <nav className={`${styles.container} ${navState === "side" ? styles.containerActive : ""}`}>
      <ul className={styles.navLinks} role="list">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Project</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavBar;
