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
  const CvElemOriginRef = useRef<HTMLAnchorElement>(null!);
  const CvElemSecRef = useRef<HTMLAnchorElement>(null!);

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
          <li>
            <CSSTransition
              in={isInView}
              timeout={500}
              nodeRef={CvElemOriginRef}
              classNames={{
                enter: styles.overlayNavItemOriginEnter,
                enterDone: styles.overlayNavItemOriginEnterDone,
                exit: styles.overlayNavItemOriginExit,
                exitDone: styles.overlayNavItemOriginExitDone,
              }}
              onExit={translateToElem(CvElemOriginRef, CvElemSecRef)}
              onEnter={() => (CvElemOriginRef.current.style.transform = `none`)}
            >
              <a
                ref={CvElemOriginRef}
                href=""
                className={styles.overlayNavItemOrigin}
              >
                &#60; Resume /&#62;
              </a>
            </CSSTransition>
            <CSSTransition
              in={isInView === false}
              timeout={500}
              nodeRef={CvElemSecRef}
              classNames={{
                enter: styles.overlayNavItemSecEnter,
                enterDone: styles.overlayNavItemSecEnterDone,
                exit: styles.overlayNavItemSecExit,
                exitDone: styles.overlayNavItemSecExitDone,
              }}
              onEnter={() => (CvElemSecRef.current.style.transform = `none`)}
              onExit={translateToElem(CvElemSecRef, CvElemOriginRef)}
            >
              <a
                ref={CvElemSecRef}
                href=""
                className={styles.overlayNavItemSec}
              >
                <FaFileCsv />
              </a>
            </CSSTransition>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default TopNavBar;

function translateToElem(
  fromElem: React.MutableRefObject<HTMLAnchorElement>,
  toElem: React.MutableRefObject<HTMLAnchorElement>,
): (() => void) | undefined {
  return () => {
    const translateX = toElem.current.offsetLeft - fromElem.current.offsetLeft;
    const translateY = toElem.current.offsetTop - fromElem.current.offsetTop;

    fromElem.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };
}
