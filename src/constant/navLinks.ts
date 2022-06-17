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
    { title: "Project", link: "project-section" },
  ],
  outerLinks: [{ title: "Resume", link: "./Emam-al-Mounqer.pdf" }],
};
