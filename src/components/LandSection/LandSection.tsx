import { FaLinkedin, FaGithub, FaVoicemail, FaMailBulk } from "react-icons/fa";

import styles from "./LandSection.module.scss";
import { useInView } from "../../hooks/useInView";
import { StaticToFixed } from "../StaticToFixed";

export const LandSection = () => {
  const { ref, isInView } = useInView<HTMLParagraphElement>({ threshold: 1 });

  return (
    <div className={styles.landSectionContainer}>
      <img src="./img/logo.svg" alt="logo" />
      <h1>BUILD INTERACTIVE WEBSITE </h1>
      <p className={styles.textSec} ref={ref}>
        THAT <span>LOOK ATTRACTIVE</span> AND <span>WORK EFFECTIVELY</span>
      </p>

      <StaticToFixed
        ref={ref}
        inTransition={isInView}
        styles={styles}
        classes="contact-animation"
        height="36.8px"
        width="233.167px"
      >
        <a href="" className={styles.contact1}>
          CONTACT
        </a>
        <a href="" className={`${styles.contact2}`}>
          <FaMailBulk />
        </a>
      </StaticToFixed>

      <ul className={styles.lists} role="list">
        <StaticToFixed
          inTransition={isInView}
          classes="bottom-right"
          height="5em"
          width="5em"
          bottom="6em"
        >
          <li>
            <a
              href="https://www.linkedin.com/in/emam-almounqer"
              target="anagreh-linkedin"
            >
              <FaLinkedin />
            </a>
          </li>
        </StaticToFixed>
        <StaticToFixed
          inTransition={isInView}
          classes="bottom-right"
          height="5em"
          width="5em"
          bottom="9em"
        >
          <li>
            <a href="https://github.com/anagreh" target="anagreh-github">
              <FaGithub />
            </a>
          </li>
        </StaticToFixed>
      </ul>
    </div>
  );
};

export default LandSection;
