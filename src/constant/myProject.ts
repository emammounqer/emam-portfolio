import { technologies, Technology } from "./technologies";
import fbImg from "./../assets/img/my-project/fb-1.png";

export type ProjectTag = "web" | "mobile" | "desktop" | "full-stack" | "game";

export interface Project {
  title: string;
  links: {
    github?: string;
    live?: string;
    other?: { name: string; url: string }[];
  };
  description: string;
  technologies: Technology[];
  date: string;
  notes: string[];
  demoVid?: string;
  imageUrl: string;
  tags: ProjectTag[];
}

export const fbClone: Project = {
  title: "Facebook Clone",
  description:
    "It is a clone of Facebook website. It is a simple clone of Facebook website, which is built with ReactJS, ExpressJS as backend and MongoDB as data base, it is a full-stack application.",
  links: {
    live: "https://ema-fb.netlify.app",
    github: "https://github.com/anagreh/facebook-clone",
  },
  imageUrl: fbImg,
  technologies: [
    technologies.react,
    technologies.styledComponent,
    technologies.typescript,
    technologies.rest,
    technologies.express,
  ],
  date: "Jul 2022",
  notes: ['All components are done by me from scratch'],
  tags: ["web", "full-stack"],

};



export const myProjects: Project[] = [fbClone];
