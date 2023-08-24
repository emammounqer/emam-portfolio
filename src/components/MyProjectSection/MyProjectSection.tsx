import React from "react";
import { FaReact, FaSass } from "react-icons/fa";
import { myProjects } from "../../constant/myProject";
import { Card } from "./Card";
import styles from "./MyProjectSection.module.scss";

export const MyProjectSection = () => {
  return (
    <section id="project-section" className={`${styles.container}`}>
      <h2 className="text-center text-2xl p-12">My Work</h2>

      <div className="flex flex-col gap-12">
        {myProjects.map((project, i) => {
          const dire = i % 2 === 0 ? "Left" : "Right";
          return <Card project={project} dire={dire} key={project.title} />;
        })}
      </div>
    </section>
  );
};

export default MyProjectSection;
