import React from "react";
import { Card } from "./Card";
import styles from "./MyProjectSection.module.scss";

export const MyProjectSection = () => {
  return (
    <section className={styles.container}>
      <h2>My Work</h2>
      <Card />
      <Card dire="Right" />
      <Card />
    </section>
  );
};

export default MyProjectSection;
