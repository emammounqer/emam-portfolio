import { useState } from "react";
import "./styles/App.css";

import { NavBar, SideNavBar, TopNavBar } from "./components/NavBar";
import { LandSection } from "./components/LandSection";
import { WhatIUseSection } from "./components/WhatIUseSection";
import { MyProjectSection } from "./components/MyProjectSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandSection />
      <WhatIUseSection />
      <MyProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
