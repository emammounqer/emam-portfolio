import React, { useEffect, useRef, useState } from "react";
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import { MobileNavBar } from "./MobileNavBar";

export type NavState = "top" | "side";

export const NavBar = () => {
  const [navState, setNavState] = useState<NavState>("top");

  return (
    <div>
      <TopNavBar navState={navState} setNavState={setNavState} />
      <SideNavBar navState={navState} setNavState={setNavState} />
      <MobileNavBar />
    </div>
  );
};

export default NavBar;
