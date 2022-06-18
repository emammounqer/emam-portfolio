import React from "react";
import styles from "./WhatIUseSection.module.scss";

import ICONS from "../../constant/icons";

export const WhatIUseSection = () => {
  return (
    <section className={`${styles.container} container`}>
      <h2 hidden>What I Use</h2>
      <div className={styles.content}>
        <img src="./img/screw.svg" className={styles.screw} />
        <img src="./img/screw.svg" className={styles.screw} />

        <div id="what-i-use-section" className={`${styles.grid}`}>
          {/* frond end icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.cellHeader}>
              <img className={styles.icon} src={ICONS.front.front_dev} alt="front" />
              <h3>Front-End</h3>
            </div>

            <div className={styles.iconGroup}>
              {/* TODO: add typescript */}
              <img className={styles.icon} src={ICONS.front.html_5} alt="html" />
              <img className={styles.icon} src={ICONS.front.css_3} alt="css" />
              <img className={styles.icon} src={ICONS.front.javascript} alt="javascript" />
              <img className={styles.icon} src={ICONS.front.bootstrap} alt="bootstrap" />
              <img className={styles.icon} src={ICONS.front.react} alt="react" />
              <img className={styles.icon} src={ICONS.front.webpack} alt="webpack" />
            </div>
          </div>

          {/* back end icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.cellHeader}>
              <img className={styles.icon} src={ICONS.back.back_dev} alt="back" />
              <h3>Back-End</h3>
            </div>
            <div className={styles.iconGroup}>
              <img className={styles.icon} src={ICONS.back.nodejs} alt="nodejs" />
              <img className={styles.icon} src={ICONS.back.express} alt="express" />
              <img className={styles.icon} src={ICONS.back.mongodb} alt="mongodb" />
              <img className={styles.icon} src={ICONS.back.mysql} alt="mysql" />
              <img className={styles.icon} src={ICONS.back.rest_api} alt="api" />
            </div>
          </div>

          {/* other icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.iconGroup}>
              <img className={styles.icon} src={ICONS.other.git} alt="Git" />
              <img className={styles.icon} src={ICONS.other.github} alt="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIUseSection;
