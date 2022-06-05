import { useState } from "react";
import "./styles/App.css";

import { NavBar, SideNavBar, TopNavBar } from "./components/NavBar";
import { LandSection } from "./components/LandSection";
import { WhatIUseSection } from "./components/WhatIUseSection";
import { MyProjectSection } from "./components/MyProjectSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandSection />
      <WhatIUseSection />
      <MyProjectSection />
    </div>
  );
}

export default App;
