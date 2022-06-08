import { FaLinkedin, FaGithub, FaVoicemail } from "react-icons/fa";

import styles from "./LandSection.module.scss";
import { useInView } from "../../hooks/useInView";
import { StaticToFixed } from "../StaticToFixed";

export const LandSection = () => {
  const { ref, isInView } = useInView<HTMLParagraphElement>({ threshold: 1 });

  return (
    <div className={styles.container}>
      <img src="./img/logo.svg" alt="logo" />
      <h1>BUILD INTERACTIVE WEBSITE </h1>
      <p className={styles.textSec} ref={ref}>
        THAT <span>LOOK ATTRACTIVE</span> AND <span>WORK EFFECTIVELY</span>
      </p>

      <StaticToFixed
        ref={ref}
        inTransition={isInView}
        styles={styles}
        classes="btn"
        height="36.8px"
        width="233.167px"
      >
        <button className={styles.btn}>CONTACT</button>
      </StaticToFixed>

      <ul className={styles.lists} role="list">
        <StaticToFixed
          inTransition={isInView}
          classes="bottom-right"
          height="5em"
          width="5em"
        >
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
        </StaticToFixed>

        <li>
          <a href="">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LandSection;
