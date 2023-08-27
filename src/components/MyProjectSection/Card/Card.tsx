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
  const [slideSelected, setSlideSelected] = useState<number>(0);
  const interval = useRef<number>();
  const { isInView, ref } = useInView<HTMLVideoElement>({ threshold: 0.7 });

  const allSlides = [project.description, ...project.notes];

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
    setSlideSelected((prev) => (prev >= allSlides.length - 1 ? 0 : prev + 1));
  };

  const handleOnSelectSliderClick = (index: number) => {
    resetTimer();
    setSlideSelected(index);
  };
  // #endregion

  return (
    <div className="flex flex-col bg-red-400 rounded-t-3xl md:rounded-s-3xl md:flex-row md:h-96">
      <div className="z-20 grid w-full overflow-hidden rounded-3xl bg-slate-400 shrink-0 place-items-center md:w-3/5">
        <video
          ref={ref}
          src="/vid/beit-aziz.mp4"
          muted
          controls
          className="rounded-lg"
        ></video>
      </div>
      <div className="relative flex flex-col w-full ">
        <span className="inline-flex items-center justify-between p-3">
          <h2 className="text-xl leading-relaxed">{project.title}</h2>
          <p>Jun - 2016</p>
        </span>

        <div className="relative flex-grow h-64 overflow-y-hidden text-justify rounded-e-xl md:h-auto">
          {allSlides.map((note, i) => (
            <motion.div
              className="absolute h-full p-8 overflow-y-auto rounded-tr-lg rounded-br-lg bg-amber-700"
              variants={variantSlider}
              animate={slideSelected === i ? "selected" : "initial"}
            >
              <p>{note}</p>
              <div className="absolute top-0 bottom-0 border border-l border-dashed opacity-25 left-6"></div>
            </motion.div>
          ))}

          <div className="absolute top-0 bottom-0 z-10 inline-flex flex-col items-start justify-center gap-3 p-1 my-auto">
            {allSlides.map((_, i) => (
              <motion.button
                key={i}
                variants={variantSliderButton}
                animate={slideSelected === i ? "selected" : "initial"}
                className={`w-4 h-4 rounded-full bg-blue-800`}
                onClick={() => handleOnSelectSliderClick(i)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-3">
          {project.technologies.map((tech) => (
            <img
              key={tech.title}
              src={tech.icon}
              alt={tech.title}
              className="w-6 h-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
