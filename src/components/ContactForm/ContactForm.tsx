import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

import styles from "./ContactForm.module.scss";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren",
      staggerDirection: -1,
    },
  },
  exit: { opacity: 0, scale: 0.6 },
};

const headerVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const fromVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

interface props {
  isContactForm: boolean;
  closeContactForm: () => void;
}
export const ContactForm: React.FC<props> = ({ isContactForm, closeContactForm }) => {
  //state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //effects
  useEffect(() => {
    if (isContactForm) {
      window.document.body.classList.add(styles.noScroll);
    } else {
      window.document.body.classList.remove(styles.noScroll);
    }
  }, [isContactForm]);

  //functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setError("");
    setIsLoading(true);
    emailjs.sendForm("service_4qzafa7", "template_zddwtsp", form, "P0bFXaTqDvwsqwS5k").then(
      (result) => {
        console.log(result);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        closeContactForm();
        setError("");
      },
      (error) => {
        setError(error.text);
      },
    );
  };

  return (
    <AnimatePresence>
      {isContactForm && (
        <motion.section
          variants={containerVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          className={`${styles.contactFormContainer}`}
        >
          <div className={`${styles.backdrop}`}></div>
          <motion.header variants={headerVariants} className={`${styles.header}`}>
            <h2>Contact Me</h2>
            <button className={`${styles.closeBtn}`} onClick={closeContactForm}>
              X
            </button>
          </motion.header>
          <motion.form
            variants={fromVariants}
            className={`${styles.form}`}
            action="post"
            onSubmit={handleSubmit}
          >
            <div className={`${styles.inputWrapper}`}>
              <label htmlFor="name" className={`${styles.nameLabel} ${styles.label}`}>
                Name
              </label>
              <input
                className={`${styles.nameInput} ${styles.input}`}
                type="text"
                name="name"
                id="name"
                placeholder="name"
                onChange={handleChange}
              />
            </div>

            <div className={`${styles.inputWrapper}`}>
              <label htmlFor="email">Email</label>
              <input
                className={`${styles.emailInput} ${styles.input}`}
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
                onChange={handleChange}
              />
            </div>

            <div className={`${styles.inputWrapper}`}>
              <label htmlFor="message">Message</label>
              <textarea
                className={`${styles.messageInput} ${styles.input}`}
                name="message"
                id="message"
                placeholder="message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {error && <p className={`${styles.error}`}>{error}</p>}

            <button type="submit" className={`${styles.btn}`}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </motion.form>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
