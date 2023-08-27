import { Link } from "react-scroll";
import { navLinks } from "../../constant/navLinks";
import { NavState } from "./NavBar";
import styles from "./SideNavBar.module.scss";

interface props {
  navState: string;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
}

export const SideNavBar: React.FC<props> = ({ navState }) => {
  return (
    <nav className={`${styles.container} ${navState === "side" ? styles.containerActive : ""}`}>
      <ul className={styles.navLinks} role="list">
        {navLinks.selfLinks.map((link) => (
          <li key={"side" + link.title}>
            <Link className={`${styles.scrollLink}`} to={link.link} smooth={true}>
              {link.title}
            </Link>
          </li>
        ))}
        {navLinks.outerLinks.map((link) => (
          <li key={"side" + link.title}>
            <a href={link.link}>&#60; {link.title} /&#62;</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavBar;
