import React from "react";
import styles from "./ContactSection.module.scss";

interface props {
  openContactForm: () => void;
}
export const ContactSection: React.FC<props> = ({ openContactForm }) => {
  return (
    <section className={`${styles.container}`}>
      <h2>Interested To Work With Me</h2>
      <button className={`${styles.btn}`} onClick={openContactForm}>
        Contact
      </button>
    </section>
  );
};

export default ContactSection;
