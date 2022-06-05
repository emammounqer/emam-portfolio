import React from "react";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <section className={`${styles.container}`}>
      <h2>Interested To Work With Me</h2>
      <button className={`${styles.btn}`}>Contact</button>
    </section>
  );
};

export default ContactSection;
