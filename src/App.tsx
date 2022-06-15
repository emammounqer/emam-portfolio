import { useState } from "react";
import "./styles/App.css";

import { NavBar, SideNavBar, TopNavBar } from "./components/NavBar";
import { LandSection } from "./components/LandSection";
import { WhatIUseSection } from "./components/WhatIUseSection";
import { MyProjectSection } from "./components/MyProjectSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";

function App() {
  const [isContactForm, setIsContactForm] = useState(false);

  const closeContactForm = () => {
    setIsContactForm(false);
  };

  const openContactForm = () => {
    setIsContactForm(true);
  };

  return (
    <div className="App">
      <NavBar />
      <LandSection openContactForm={openContactForm} />
      <WhatIUseSection />
      <MyProjectSection />
      <ContactSection openContactForm={openContactForm} />
      <Footer />

      <ContactForm
        isContactForm={isContactForm}
        closeContactForm={closeContactForm}
      />
    </div>
  );
}

export default App;
