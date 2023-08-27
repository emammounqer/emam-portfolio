import styles from "./WhatIUseSection.module.scss";

import allIcons from "../../constant/icons";
import {
  frontEndTech,
  backEndTech,
  otherTech,
} from "../../constant/technologies";

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
              <img
                className={styles.icon}
                src={allIcons.front_dev}
                alt="front"
              />
              <h3>Front-End</h3>
            </div>

            <div className={styles.iconGroup}>
              {Object.values(frontEndTech).map((icon, i) => (
                <img
                  key={i}
                  className={styles.icon}
                  src={icon.iconSrc}
                  alt={icon.title}
                />
              ))}
            </div>
          </div>

          {/* back end icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.cellHeader}>
              <img className={styles.icon} src={allIcons.back_dev} alt="back" />
              <h3>Back-End</h3>
            </div>
            <div className={styles.iconGroup}>
              {Object.values(backEndTech).map((icon, i) => (
                <img
                  key={i}
                  className={styles.icon}
                  src={icon.iconSrc}
                  alt={icon.title}
                />
              ))}
            </div>
          </div>

          {/* other icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.iconGroup}>
              {Object.values(otherTech).map((icon, i) => (
                <img
                  key={i}
                  className={styles.icon}
                  src={icon.iconSrc}
                  alt={icon.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIUseSection;
