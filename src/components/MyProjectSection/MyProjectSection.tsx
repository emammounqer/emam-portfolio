import React from "react";
import { FaReact, FaSass } from "react-icons/fa";
import { Card } from "./Card";
import styles from "./MyProjectSection.module.scss";

export const MyProjectSection = () => {
  return (
    <section className={styles.container}>
      <h2>My Work</h2>
      <Card
        usedTeq={
          <>
            <FaReact /> <FaSass />
          </>
        }
      />
      <Card dire="Right" usedTeq={<FaReact />} />
      <Card usedTeq={<FaReact />} />
    </section>
  );
};

export default MyProjectSection;
