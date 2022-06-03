import { useState } from "react";
import "./styles/App.css";

import { NavBar, SideNavBar, TopNavBar } from "./components/NavBar";
import { LandSection } from "./components/LandSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandSection />
    </div>
  );
}

export default App;
