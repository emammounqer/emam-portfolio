import React from "react";
import styles from "./WhatIUseSection.module.scss";

export const WhatIUseSection = () => {
  return (
    <section className={styles.container}>
      <h2 hidden>What I Use</h2>
      <div className={styles.content}>
        <img src="./img/screw.svg" className={styles.screw} />
        <img src="./img/screw.svg" className={styles.screw} />

        <div className={`${styles.grid}`}>
          {/* frond end icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.cellHeader}>
              <img
                className={styles.icon}
                src="public\icons\front-dev.svg"
                alt="front"
              />
              <h3>Front-End</h3>
            </div>

            <div className={styles.iconGroup}>
              <img
                className={styles.icon}
                src="\icons\logos_html-5.svg"
                alt="html"
              />
              <img
                className={styles.icon}
                src="\icons\logos_css-3.svg"
                alt="css"
              />
              <img
                className={styles.icon}
                src="\icons\logos_javascript.svg"
                alt="javascript"
              />
              <img
                className={styles.icon}
                src="\icons\logos_bootstrap.svg"
                alt="bootstarp"
              />
              <img
                className={styles.icon}
                src="\icons\logos_react.svg"
                alt="react"
              />
              <img
                className={styles.icon}
                src="\icons\logos_webpac.svg"
                alt="webpack"
              />
            </div>
          </div>

          {/* back end icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.cellHeader}>
              <img
                className={styles.icon}
                src="\icons\back-dev.svg"
                alt="back"
              />
              <h3>Back-End</h3>
            </div>
            <div className={styles.iconGroup}>
              <img
                className={styles.icon}
                src="\icons\logos_nodejs.svg"
                alt="nodejs"
              />
              <img
                className={styles.icon}
                src="\icons\logos_express.svg"
                alt="express"
              />
              <img
                className={styles.icon}
                src="\icons\logos_mongodb.svg"
                alt="mongodb"
              />
              <img
                className={styles.icon}
                src="\icons\logos_mysql.svg"
                alt="mysql"
              />
              <img
                className={styles.icon}
                src="\icons\rest-api.svg"
                alt="api"
              />
            </div>
          </div>

          {/* other icons */}
          <div className={`${styles.cell}`}>
            <div className={styles.iconGroup}>
              <img
                className={styles.icon}
                src="\icons\Git-logo 1.svg"
                alt="Git"
              />
              <img
                className={styles.icon}
                src="\icons\GitHub-logo.svg"
                alt="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIUseSection;
