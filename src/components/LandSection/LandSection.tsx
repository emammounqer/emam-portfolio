import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

import styles from "./LandSection.module.scss";
import { useInView } from "../../hooks/useInView";
import { StaticToFixed } from "../StaticToFixed";

import ICONS from "../../constant/icons";
import { useEffect, useRef, useState } from "react";
import { transform } from "framer-motion";

const icons = Object.values(ICONS);
const allIcons = icons.reduce<string[]>((array, icon) => [...array, ...Object.values(icon)], []);

interface props {
  openContactForm: () => void;
}

export const LandSection: React.FC<props> = ({ openContactForm }) => {
  const { ref, isInView } = useInView<HTMLParagraphElement>({ threshold: 1 });
  const [update, setCount] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      container.current?.classList.add(styles.transitionContainer);
      setCount((old) => old + 1);
    }, 1000);

    const interval = setInterval(() => {
      setCount((old) => old + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, [ref.current]);

  const xRandomNumber = () => {
    if (container.current === null) return;

    const min = 0;
    const max = container.current.offsetWidth;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const yRandomNumber = () => {
    if (container.current === null) return;

    const min = 0;
    const max = container.current.offsetHeight;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <section className={styles.landSectionContainer} id="land-section">
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
        height="1.675em"
        width="14.5em"
      >
        <button className={styles.contact1} onClick={openContactForm}>
          CONTACT
        </button>
        <button className={`${styles.contact2}`} onClick={openContactForm}>
          <FaMailBulk />
        </button>
      </StaticToFixed>

      <ul className={styles.lists} role="list">
        <StaticToFixed
          inTransition={isInView}
          classes="bottom-right"
          height="5em"
          width="5em"
          bottom="6em"
        >
          <li className={`${styles.linkIcon}`}>
            <a href="https://www.linkedin.com/in/emam-almounqer" target="anagreh-linkedin">
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
          <li className={`${styles.linkIcon}`}>
            <a href="https://github.com/anagreh" target="anagreh-github">
              <FaGithub />
            </a>
          </li>
        </StaticToFixed>
      </ul>

      <div ref={container} className={`${styles.iconsContainer}`}>
        {allIcons.map((icon) => (
          <img
            style={{
              transform: `translate(${xRandomNumber()}px ,${yRandomNumber()}PX )`,
            }}
            className={`${styles.icon}`}
            src={icon}
            key={icon}
          />
        ))}
      </div>
    </section>
  );
};

export default LandSection;
