import { technologies, Technology } from "./technologies";
import fbImg from "./../assets/img/my-project/fb-1.png";
import dentistImg from "./../assets/img/my-project/dentist-1.png";
import pomodoroImg from "./../assets/img/my-project/pomodoro-1.png";

export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: Technology[];
  github: string;
}

export const fbClone: Project = {
  title: "Facebook Clone",
  description:
    "It is a clone of Facebook website. It is a simple clone of Facebook website, which is built with ReactJS, ExpressJS as backend and MongoDB as data base, it is a full-stack application. ",
  url: "https://ema-fb.netlify.app",
  image: fbImg,
  technologies: [
    technologies.react,
    technologies.styledComponent,
    technologies.typescript,
    technologies.rest,
    technologies.express,
  ],
  github: "https://github.com/anagreh/facebook-clone",
};

export const dentistPage: Project = {
  title: "Dentist Page",
  description:
    "It is a front-end application for dentist page, In this project I focused on the animation aspect of the page and how to use ReactJS to create a dynamic page. ",
  url: "https://anagreh-dentist.netlify.app/",
  image: dentistImg,
  technologies: [technologies.react, technologies.styledComponent, technologies.typescript],
  github: "https://github.com/anagreh/dentist-lanpage-personal",
};

export const pomodoroTimer: Project = {
  title: "PomodoroTimer ",
  description:
    "It application for pomodoro timer. I build it to help me focus in my study and work.",
  url: "https://ema-pomodoro.netlify.app/",
  image: pomodoroImg,
  technologies: [technologies.react, technologies.tailwindCss, technologies.typescript],
  github: "https://github.com/anagreh/pomodoro-timer",
};

export const myProjects: Project[] = [fbClone, dentistPage, pomodoroTimer];
