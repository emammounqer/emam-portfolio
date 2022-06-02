import React, { useEffect, useRef, useState } from "react";
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import styles from "./NavBar.module.scss";

export type NavState = "top" | "side";

export const NavBar = () => {
  const [navState, setNavState] = useState<NavState>("top");
  const [isTopNavInView, setIsTopNavInView] = useState(true);

  useEffect(() => {
    if (isTopNavInView) setNavState("top");
    else setNavState("side");
  }, [isTopNavInView]);

  return (
    <div>
      <TopNavBar navState={navState} setNavState={setNavState} />
      <SideNavBar navState={navState} setNavState={setNavState} />
    </div>
  );
};

export default NavBar;
