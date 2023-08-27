import { allTechnologies, Technology } from "./technologies";
import fbImg from "./../assets/img/my-project/fb-1.png";
import ggImg from "./../assets/img/my-project/geogenius.png";

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

export const BeitAziz: Project = {
  title: "Beit Aziz",
  description:
    "Developed a web application for a real client to enhance customer engagement and streamline reservation and order management.",
  links: {
    live: "https://beit-aziz.vercel.app/",
  },
  imageUrl: "",
  demoVid: "/vid/beit-aziz.mp4",
  technologies: [
    allTechnologies.nextJs,
    allTechnologies.django,
    allTechnologies.postgress,
    allTechnologies.python,
    allTechnologies.restApi,
  ],
  date: "Aug 2023",
  notes: [
    "Create two websites Front-End and admin site (CMS)",
    "Done by two people within two weeks",
  ],
  tags: ["web", "full-stack"],
};

export const GeoGenius: Project = {
  title: "GeoGenius",
  description:
    "Created an interactive web app allowing users to explore country-specific information by clicking on a map, and a simple quiz game, and you can answer by clicking on a map",
  links: {
    live: "https://geogenius-ltuc.netlify.app/",
  },
  imageUrl: ggImg,
  technologies: [
    allTechnologies.react,
    allTechnologies.express,
    allTechnologies.restApi,
    allTechnologies.postgress,
  ],
  date: "Mar 2023",
  notes: ["Create two websites Front-End and admin site (CMS)"],
  tags: ["web", "full-stack"],
};

export const PriceWise: Project = {
  title: "PriceWise",
  description:
    "Designed and built an application for searching e-commerce websites and retrieving product details",
  links: {
    github: "https://github.com/Price-Wise/pricewise",
  },
  imageUrl: "",
  demoVid: "/vid/pricewise.mp4",
  technologies: [allTechnologies.python],
  date: "Jun 2023",
  notes: [
    " Utilized Python along with Playwright and HTTPX for data scraping, and EEL for the user interface",
  ],
  tags: ["desktop"],
};

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
    allTechnologies.react,
    allTechnologies.styledComponents,
    allTechnologies.typescript,
    allTechnologies.restApi,
    allTechnologies.express,
  ],
  date: "Jul 2022",
  notes: ["All components are done by me from scratch"],
  tags: ["web", "full-stack"],
};

export const myProjects: Project[] = [BeitAziz, PriceWise, GeoGenius, fbClone];
