import React, { useEffect, useRef, useState } from "react";
import {
  SwitchTransition,
  CSSTransition,
  Transition,
} from "react-transition-group";
import { useInView } from "../../hooks/useInView";

import styles from "./TopNavBar.module.scss";
import { NavState } from "./NavBar";
import { FaFileCsv } from "react-icons/fa";

interface props {
  navState: NavState;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
}

export const TopNavBar: React.FC<props> = ({ navState, setNavState }) => {
  const { ref, isInView, entry } = useInView<HTMLDivElement>();
  const CvElemRef = useRef(null!);

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
        <div className={`${styles.secLinks}`}>
          <Transition in={isInView} timeout={500} nodeRef={CvElemRef}>
            {(state) => {
              const State = state.charAt(0).toUpperCase() + state.slice(1);

              return (
                <li ref={CvElemRef}>
                  <a
                    href=""
                    className={
                      styles[`overlayNavItemOrigin${State}`] +
                      " " +
                      styles.overlayNavItemOrigin
                    }
                  >
                    &#60; Resume /&#62; {state}
                  </a>
                  <a
                    href=""
                    className={
                      styles[`overlayNavItemSec${State}`] +
                      " " +
                      styles.overlayNavItemSec
                    }
                  >
                    <FaFileCsv />
                    {state}
                  </a>
                </li>
              );
            }}
          </Transition>
        </div>
      </ul>
    </nav>
  );
};

export default TopNavBar;
