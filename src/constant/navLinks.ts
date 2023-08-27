export interface NavLink {
  title: string;
  link: string;
}

interface NavLinks {
  selfLinks: NavLink[];
  outerLinks: NavLink[];
}

export const navLinks: NavLinks = {
  selfLinks: [
    { title: "Home", link: "land-section" },
    { title: "WhatIUse", link: "what-i-use-section" },
    { title: "Project", link: "project-section" },
  ],
  outerLinks: [{ title: "Resume", link: "./cvs/Emam_al_Mounqer_CV.pdf" }],
};
