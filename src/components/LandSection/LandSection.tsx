import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./LandSection.module.scss";

export const LandSection = () => {
  return (
    <div className={styles.container}>
      <img src="./img/logo.svg" alt="logo" />
      <h1>BUILD INTERACTIVE WEBSITE </h1>
      <p className={styles.textSec}>
        THAT <span>LOOK ATTRACTIVE</span> AND <span>WORK EFFECTIVELY</span>
      </p>

      <button className={styles.btn}>CONTACT</button>

      <ul className={styles.lists} role="list">
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
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
