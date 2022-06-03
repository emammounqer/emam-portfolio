import { useState } from "react";
import "./styles/App.css";

import { NavBar, SideNavBar, TopNavBar } from "./components/NavBar";
import { LandSection } from "./components/LandSection";
import { WhatIUseSection } from "./components/WhatIUseSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandSection />
      <WhatIUseSection />
    </div>
  );
}

export default App;
