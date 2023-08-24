import React, { useEffect, useRef, useState } from "react";
import styles from "./Card.module.scss";

import { FaGithub } from "react-icons/fa";
import { animate, motion, Variants } from "framer-motion";
import { useInView } from "../../../hooks/useInView";
import { Project } from "../../../constant/myProject";

const variantSliderButton: Variants = {
  initial: { height: 16 },
  selected: { height: 28 },
};

const variantSlider: Variants = {
  initial: {
    rotateY: 120,
    opacity: 0.9,
    transformOrigin: "left",
    transition: { duration: 0.5 },
  },
  selected: {
    rotateY: 0,
    opacity: 1,
    transformOrigin: "left",
    transition: { duration: 0.5 },
  },
};

const btns = [1, 2, 3, 4];

interface props {
  dire?: "Left" | "Right";
  project: Project;
}

export const Card: React.FC<props> = ({ dire = "Left", project }) => {
  const [slideSelected, setSlideSelected] = useState<number>(1);
  const interval = useRef<number>();
  const { isInView, ref } = useInView<HTMLVideoElement>({ threshold: 0.7 });

  if (isInView) {
    ref.current?.play();
  } else {
    ref.current?.pause();
  }
  // #region slide
  useEffect(() => {
    resetTimer();
    return () => clearInterval(interval.current);
  }, [isInView]);

  const resetTimer = () => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      if (!isInView) return;
      goToNextSlide();
    }, 5000);
  };

  const goToNextSlide = () => {
    setSlideSelected((prev) => (prev >= 2 ? 1 : prev + 1));
  };

  const handleOnSelectSliderClick = (index: number) => {
    resetTimer();
    setSlideSelected(index);
  };
  // #endregion

  return (
    <div className="flex h-96 bg-slate-500">
      <div className="z-20 w-3/5 bg-red-200 rounded-3xl shrink-0 grid  place-items-center overflow-hidden">
        <video ref={ref} src="/vid/beit-aziz.mp4" muted controls></video>
      </div>
      <div className="relative flex flex-col w-full bg-green-200 ">
        <h2 className="text-xl leading-relaxed text-center">{project.title}</h2>
        <div className="absolute top-0 bottom-0 z-10 inline-flex flex-col items-start justify-center gap-3 p-1 my-auto">
          {btns.map((btn) => (
            <motion.button
              key={btn}
              variants={variantSliderButton}
              animate={slideSelected === btn ? "selected" : "initial"}
              className={`w-4 h-4 rounded-full bg-zinc-300`}
              onClick={() => handleOnSelectSliderClick(btn)}
            />
          ))}
        </div>
        <div className="relative flex-grow bg-purple-600">
          <motion.div
            className="absolute h-full p-6 text-justify rounded-tr-lg rounded-br-lg bg-cyan-500"
            variants={variantSlider}
            animate={slideSelected === 1 ? "selected" : "initial"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            accusantium possimus quia sit laudantium, vero impedit itaque fuga.
            Sed sit vitae accusamus quos, illum repudiandae voluptas blanditiis
            ab nisi consectetur?
          </motion.div>
          <motion.div
            className="absolute h-full p-6 bg-amber-500"
            variants={variantSlider}
            animate={slideSelected === 2 ? "selected" : "initial"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            voluptatem culpa numquam, inventore quaerat, harum totam odio, ipsam
            dolore id mollitia enim accusantium cupiditate quam tempore
            doloribus possimus sequi ipsum.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
