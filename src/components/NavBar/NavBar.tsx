import React, { useRef, useState } from "react";
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import styles from "./NavBar.module.scss";

import { CSSTransition } from "react-transition-group";

export const NavBar = () => {
  const sideNav = useRef(null!);
  const [isTopNavInView, setIsTopNavInView] = useState(true);

  return (
    <div>
      <TopNavBar setIsTopNavInView={setIsTopNavInView} />
      <CSSTransition
        nodeRef={sideNav}
        in={isTopNavInView === false}
        appear
        timeout={500}
        classNames={{
          appear: styles.sideNavAppear,
          appearActive: styles.sideNavAppearActive,
          appearDone: styles.sideNavAppearDone,
          enter: styles.sideNavEnter,
          enterActive: styles.sideNavEnterActive,
          enterDone: styles.sideNavEnterDone,
          exit: styles.sideNavExit,
          exitActive: styles.sideNavExitActive,
          exitDone: styles.sideNavExitDone,
        }}
        mountOnEnter
        unmountOnExit
      >
        <SideNavBar ref={sideNav} />
      </CSSTransition>
    </div>
  );
};

export default NavBar;
