import AllIcons from "./icons";

export type Technology =  {
  title: string;
  iconSrc: string;
}

export const frontEndTech = {
  html_5: { title: "HTML 5", iconSrc: AllIcons.html_5 },
  css_3:{ title: "CSS 3", iconSrc: AllIcons.css_3 },
  javascript: { title: "JavaScript", iconSrc: AllIcons.javascript },
  bootstrap:{ title: "Bootstrap", iconSrc: AllIcons.bootstrap },
  react: { title: "React", iconSrc: AllIcons.react },
  webpack: { title: "Webpack", iconSrc: AllIcons.webpack },
  typescript:{ title: "TypeScript", iconSrc: AllIcons.typescript },
  figma: { title: "Figma", iconSrc: AllIcons.figma },
  tailwindCss: { title: "tailwindCss", iconSrc: AllIcons.tailwindCss },
  nextJs: { title: "Next.js", iconSrc: AllIcons.nextjs },
}

export const backEndTech= {
  node : { title: "Node.js", iconSrc: AllIcons.nodejs },
  express: { title: "Express", iconSrc: AllIcons.express },
  restApi: { title: "REST API", iconSrc: AllIcons.rest_api },
  django: { title: "Django", iconSrc: AllIcons.django },
  postgress: { title: "PostgreSQL", iconSrc: AllIcons.postgress },
  python: { title: "python", iconSrc: AllIcons.python },
};

export const otherTech = {
  git: { title: "Git", iconSrc: AllIcons.git },
  github: { title: "GitHub", iconSrc: AllIcons.github },
};



export const technologies = {
  ...frontEndTech,
  ...backEndTech,
  ...otherTech,
};

export const allTechnologies = {
  ...frontEndTech,
  ...backEndTech,
  ...otherTech,
  styledComponents: { title: "Styled Components", iconSrc: AllIcons.styledComponents },
  mongoDB: { title: "MongoDB", iconSrc: AllIcons.mongodb },
}