import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";

import styles from "./Card.module.scss";
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
    }, 7000);
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
    <div
      className={`flex flex-col rounded-t-3xl md:rounded-tr-none md:rounded-s-3xl md:flex-row shadow-lg ${styles.gradientBackground}`}
    >
      <div
        className={`z-20 grid w-full overflow-hidden rounded-3xl shrink-0 place-items-center md:w-3/5 `}
      >
        {project.demoVid ? (
          <video
            ref={ref}
            src={project.demoVid}
            muted
            controls
            className="rounded-lg"
          ></video>
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-lg"
          />
        )}
      </div>

      <div className={`relative flex flex-col w-full text-white `}>
        <span className="inline-flex items-center justify-between p-3">
          <span className="inline-flex items-center gap-2">
            <h2 className="text-lg leading-relaxed uppercase">
              {project.title}
            </h2>
            {project.links.live && (
              <a href={project.links.live}>
                <FaPlay />
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github}>
                <FaGithub />
              </a>
            )}
          </span>
          <p>{project.date}</p>
        </span>

        <div className="relative flex-grow h-64 overflow-y-hidden font-semibold text-justify text-slate-900 rounded-e-xl md:h-auto">
          {allSlides.map((note, i) => (
            <motion.div
              className="absolute h-full p-8 overflow-y-auto rounded-tr-lg rounded-br-lg shadow bg-section"
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
                className={`w-4 h-4 rounded-full bg-assent`}
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
