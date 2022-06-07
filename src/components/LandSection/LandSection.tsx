import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FaLinkedin, FaGithub, FaVoicemail } from "react-icons/fa";

import styles from "./LandSection.module.scss";
import { useInView } from "../../hooks/useInView";
import { getTransformBetweenElems } from "../../helper/distanceBetweenElem";
import { getCords } from "../../helper/getCords";

export const LandSection = () => {
  const { ref, isInView } = useInView<HTMLParagraphElement>();
  const con1 = useRef<HTMLButtonElement>(null!);
  const con2 = useRef<HTMLLIElement>(null!);
  const conContainer1 = useRef<HTMLDivElement>(null!);
  const conContainer2 = useRef<HTMLDivElement>(null!);

  const [con1Transform, setCon1Transform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleTransform = (e: Event) => {
      const cordConContainer2 = getCords(conContainer2.current);

      const x = cordConContainer2.left - conContainer1.current.offsetLeft;
      const y = cordConContainer2.top - conContainer1.current.offsetTop;

      setCon1Transform({ x, y });
    };

    window.addEventListener("scroll", handleTransform);
    window.addEventListener("resize", handleTransform);

    return () => {
      window.removeEventListener("scroll", handleTransform);
      window.removeEventListener("resize", handleTransform);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      con1.current.style.transform = "";
      con2.current.style.transform = `translate(${-con1Transform.x}px, ${-con1Transform.y}px)`;
    } else {
      con2.current.style.transform = "";
      con1.current.style.transform = `translate(${con1Transform.x}px, ${con1Transform.y}px)`;
    }
  }, [isInView, con1Transform]);

  return (
    <div className={styles.container}>
      <img src="./img/logo.svg" alt="logo" />
      <h1>BUILD INTERACTIVE WEBSITE </h1>
      <p className={styles.textSec} ref={ref}>
        THAT <span>LOOK ATTRACTIVE</span> AND <span>WORK EFFECTIVELY</span>
      </p>

      <div ref={conContainer1}>
        <CSSTransition
          nodeRef={con1}
          in={isInView}
          timeout={500}
          appear={true}
          classNames={{
            enter: styles.btnEnter,
            enterDone: styles.btnEnterDone,
            exit: styles.btnExit,
            exitDone: styles.btnExitDone,
          }}
        >
          <button ref={con1} className={styles.btn}>
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

      <ul className={`${styles.overlayContact}`} role="list">
        <div ref={conContainer2}>
          <CSSTransition
            nodeRef={con2}
            in={!isInView}
            timeout={500}
            appear={true}
            classNames={{
              enter: styles.btn2Enter,
              enterDone: styles.btn2EnterDone,
              exit: styles.btn2Exit,
              exitDone: styles.btn2ExitDone,
            }}
          >
            <li ref={con2}>
              <div role="button">
                <FaVoicemail />
              </div>
            </li>
          </CSSTransition>
        </div>
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
