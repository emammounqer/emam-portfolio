import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FaLinkedin, FaGithub, FaVoicemail } from "react-icons/fa";

import styles from "./LandSection.module.scss";
import { useInView } from "../../hooks/useInView";
import { getTransformBetweenElems } from "../../helper/distanceBetweenElem";
import { getCords } from "../../helper/getCords";

export const LandSection = () => {
  const { ref, isInView } = useInView<HTMLParagraphElement>();
  const ContactRef = useRef<HTMLButtonElement>(null!);
  const ContactContainerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const container = ContactContainerRef.current;
    const rect = container.getBoundingClientRect();

    const xOffset = window.innerWidth - rect.x - rect.width;
    container.style.setProperty("--transformX-contact", `${-xOffset}px`);

    const yOffset = window.innerHeight - rect.y - rect.height;
    container.style.setProperty("--transformY-contact", `${yOffset}px`);
  }, []);

  return (
    <div className={styles.container}>
      <img src="./img/logo.svg" alt="logo" />
      <h1>BUILD INTERACTIVE WEBSITE </h1>
      <p className={styles.textSec} ref={ref}>
        THAT <span>LOOK ATTRACTIVE</span> AND <span>WORK EFFECTIVELY</span>
      </p>

      <div className={`${styles.btnContainer}`} ref={ContactContainerRef}>
        <CSSTransition
          nodeRef={ContactRef}
          in={isInView}
          timeout={0}
          appear={true}
          classNames={{
            enter: styles.btnEnter,
            enterDone: styles.btnEnterDone,
            exit: styles.btnExit,
            exitDone: styles.btnExitDone,
          }}
        >
          <button ref={ContactRef} className={styles.btn}>
            CONTACT
          </button>
        </CSSTransition>
      </div>
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
