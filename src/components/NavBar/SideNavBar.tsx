import React, { forwardRef } from "react";
import styles from "./SideNavBar.module.scss";

export const SideNavBar = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav className={styles.container} ref={ref}>
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
});

export default SideNavBar;
