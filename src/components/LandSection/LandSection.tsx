import { FaLinkedin, FaGithub, FaVoicemail } from "react-icons/fa";
import { motion, transform, Variants } from "framer-motion";
import styles from "./LandSection.module.scss";
import { useInView } from "../../hooks/useInView";
import { useEffect, useRef, useState } from "react";
import { getTransformBetweenElems } from "../../helper/distanceBetweenElem";
import { getCords } from "../../helper/getCords";

const variant: Variants = {
  land: { opacity: 1 },
  overlay: { opacity: 0 },
};

export const LandSection = () => {
  const { ref, isInView } = useInView<HTMLParagraphElement>();
  const con1 = useRef<HTMLButtonElement>(null!);
  const con2 = useRef<HTMLLIElement>(null!);
  // const li1 = useRef<HTMLLIElement>(null!);
  // const li2 = useRef<HTMLLIElement>(null!);
  // const gi1 = useRef<HTMLLIElement>(null!);
  // const gi2 = useRef<HTMLLIElement>(null!);

  const [con1Transform, setCon1Transform] = useState({ x: 0, y: 0 });
  // const [li1Transform, setLi1Transform] = useState({ x: 0, y: 0 });
  // const [gi1Transform, setGi1Transform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleTransform = (e: Event) => {
      const cordCon2 = getCords(con2.current);

      const x = cordCon2.left - con1.current.offsetLeft;
      const y = cordCon2.top - con1.current.offsetTop;

      setCon1Transform({ x, y });
    };

    window.addEventListener("scroll", handleTransform);
    window.addEventListener("resize", handleTransform);

    return () => {
      window.removeEventListener("scroll", handleTransform);
      window.removeEventListener("resize", handleTransform);
    };
  }, []);

  // useEffect(() => {
  //   if (li1.current && li2.current) {
  //     const transformLi1 = getTransformBetweenElems(li1.current, li2.current);
  //     setLi1Transform(transformLi1);
  //   }
  // }, [li1.current, li2.current]);

  // useEffect(() => {
  //   if (gi1.current && gi2.current) {
  //     const transformGi1 = getTransformBetweenElems(gi1.current, gi2.current);
  //     setGi1Transform(transformGi1);
  //   }
  // }, [gi1.current, gi2.current]);

  return (
    <div className={styles.container}>
      <img src="./img/logo.svg" alt="logo" />
      <h1>BUILD INTERACTIVE WEBSITE </h1>
      <p className={styles.textSec} ref={ref}>
        THAT <span>LOOK ATTRACTIVE</span> AND <span>WORK EFFECTIVELY</span>
      </p>

      <motion.button
        ref={con1}
        className={styles.btn}
        animate={
          isInView
            ? {
                x: 0,
                y: 0,
                scale: 1,
                // opacity: 1,
              }
            : {
                x: con1Transform.x - con1.current.offsetWidth,
                y: con1Transform.y - con1.current.offsetHeight,
                scale: 0.5,
                pointerEvents: "none",
                // opacity: 0,
              }
        }
        transition={{ type: "tween" }}
      >
        CONTACT
      </motion.button>

      <ul className={styles.lists} role="list">
        <motion.li>
          <a href="">
            <FaLinkedin />
          </a>
        </motion.li>
        <li>
          <a href="">
            <FaGithub />
          </a>
        </li>
      </ul>

      <ul className={`${styles.overlayContact}`} role="list">
        <li ref={con2}>
          <motion.div
            role="button"
            animate={
              isInView
                ? {
                    x: -con1Transform.x,
                    y: -con1Transform.y,
                    scale: 2,
                    // opacity: 0,
                    pointerEvents: "none",
                  }
                : {
                    x: 0,
                    y: 0,
                    scale: 1,
                    // opacity: 1,
                  }
            }
            transition={{ type: "tween" }}
          >
            <FaVoicemail />
          </motion.div>
        </li>
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
