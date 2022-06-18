import ICONS from "./icons";

export class Technology {
  title: string;
  icon: string;

  constructor(title: string, icon: string) {
    this.title = title;
    this.icon = icon;
  }
}

export const react = new Technology("react", ICONS.front.react);
export const typescript = new Technology("typescript", ICONS.front.typescript);
export const sass = new Technology("styled-component", ICONS.front.sass);
export const styledComponent = new Technology("styled-component", ICONS.front.styled_components);
export const bootstrap = new Technology("bootstrap", ICONS.front.bootstrap);
export const css3 = new Technology("css3", ICONS.front.css_3);
export const html5 = new Technology("html5", ICONS.front.html_5);
export const javascript = new Technology("javascript", ICONS.front.javascript);
export const tailwindCss = new Technology("javascript", ICONS.front.tailwindCss);

export const node = new Technology("node", ICONS.back.nodejs);
export const express = new Technology("express", ICONS.back.express);
export const mongo = new Technology("mongo", ICONS.back.mongodb);
export const mysql = new Technology("mysql", ICONS.back.mysql);
export const rest = new Technology("rest", ICONS.back.rest_api);

export const github = new Technology("github", ICONS.other.github);
export const git = new Technology("git", ICONS.other.git);

export const technologies = {
  react,
  sass,
  bootstrap,
  css3,
  html5,
  javascript,
  node,
  express,
  mongo,
  mysql,
  rest,
  github,
  git,
  typescript,
  styledComponent,
  tailwindCss,
};
