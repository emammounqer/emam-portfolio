import React, { useState } from "react";
import styles from "./Card.module.scss";

import project1Img from "./../../../assets/img/project-1-1.png";
import { FaGithub } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { useInView } from "../../../hooks/useInView";

const variantsAboutContainer: Variants = {
  initialLeft: { x: 300 },
  initialRight: { x: -300 },
  onView: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const initialVariantPin = { scale: 1.3, x: 15, y: -10 };
const variantsPin: Variants = {
  initialLeft: initialVariantPin,
  initialRight: initialVariantPin,
  onView: { scale: 1, x: 0, y: 0, transition: { ease: "easeOut" } },
};

const variantsContainerAfter: Variants = {
  onView: {
    rotate: [0, 2, 0],
    originX: 0,
    originY: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

interface props {
  dire?: "Left" | "Right";
  usedTeq: React.ReactNode;
}

export const Card: React.FC<props> = ({ dire = "Left", usedTeq }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.4 }, true);

  return (
    <motion.div
      className={`${styles.projectCard} ${styles[`projectCard${dire}`]}`}
      ref={ref}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
      initial={{ opacity: 0.3 }}
    >
      <img src={project1Img} alt="project1Img" />
      <div className={`${styles.cardInfo}`}>
        <h3 className={styles.cardHeader}>
          <a className={`${styles.githubLink}`} href="">
            <FaGithub />
          </a>
          Linking Pages
        </h3>
        <motion.div
          className={styles.cardAboutContainer}
          variants={variantsAboutContainer}
          initial={dire === "Left" ? "initialLeft" : "initialRight"}
          animate={isInView ? "onView" : dire === "Left" ? "initialLeft" : "initialRight"}
        >
          <motion.div className={`${styles.after}`} variants={variantsContainerAfter}></motion.div>
          <motion.svg
            variants={variantsPin}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.77397 15.287L2.66897 18.537L2.89297 19.6L3.95297 19.373L6.05697 16.125C5.60453 15.8856 5.17506 15.6051 4.77397 15.287ZM13.686 14.152C13.7 14.123 13.709 14.091 13.722 14.06C13.775 13.943 13.822 13.826 13.86 13.703C13.866 13.681 13.869 13.659 13.876 13.639C13.915 13.5046 13.9477 13.3685 13.974 13.231V13.21C14.169 12.041 13.829 10.737 13.051 9.55901L14.161 7.84501C15.44 8.00801 16.546 7.68601 17.078 6.86301C18.001 5.44001 16.878 3.07101 14.573 1.57001C12.266 0.0680118 9.64997 0.00501168 8.72897 1.42601C8.19497 2.25001 8.35097 3.39301 9.02197 4.49901L7.90997 6.21301C6.52097 5.98001 5.19397 6.19701 4.20697 6.85301C4.20097 6.85501 4.19397 6.85701 4.18997 6.86101C4.07465 6.93941 3.96381 7.02421 3.85797 7.11501C3.84097 7.12901 3.82097 7.14201 3.80697 7.15601C3.71097 7.24085 3.62045 7.3317 3.53597 7.42801C3.51597 7.45201 3.48797 7.47301 3.46897 7.49801C3.36247 7.61863 3.26551 7.74735 3.17897 7.88301C1.79497 10.016 2.97597 13.244 5.81197 15.092C8.64997 16.94 12.072 16.706 13.453 14.573C13.54 14.438 13.62 14.297 13.686 14.152ZM12.871 4.19401C11.984 3.61701 11.551 2.70701 11.906 2.15801C12.26 1.61101 13.267 1.63601 14.152 2.21301C15.041 2.79001 15.47 3.70201 15.117 4.24901C14.764 4.79601 13.759 4.77101 12.871 4.19401Z"
              fill="#A14A76"
            />
          </motion.svg>
          <p className={styles.cardAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
        </motion.div>
        <div className={`${styles.usedTeqContainer}`}>{usedTeq}</div>
      </div>
    </motion.div>
  );
};

export default Card;
