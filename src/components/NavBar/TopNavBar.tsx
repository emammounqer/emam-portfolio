import React, { useEffect, useRef, useState } from "react";
import styles from "./TopNavBar.module.scss";
import { useInView } from "../../hooks/useInView";

interface props {
  setIsTopNavInView: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TopNavBar: React.FC<props> = ({ setIsTopNavInView }) => {
  const { ref, isInView, entry } = useInView<HTMLDivElement>();

  useEffect(() => {
    setIsTopNavInView(isInView);
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
