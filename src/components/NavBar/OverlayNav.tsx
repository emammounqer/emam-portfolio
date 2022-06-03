import React from "react";
import { FaFileCsv } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

import styles from "./OverlayNav.module.scss";
import { NavState } from "./NavBar";

const variants: Variants = { side: { opacity: 1 }, top: { opacity: 0 } };

interface props {
  navState: NavState;
}
export const OverlayNavBar: React.FC<props> = ({ navState }) => {
  return (
    <nav className={styles.overlayNav}>
      <ul role="list">
        {navState === "side" && (
          <motion.li layout layoutId="CVNav" transition={{ duration: 0.5 }}>
            <a href="">
              <FaFileCsv />
            </a>
          </motion.li>
        )}
      </ul>
    </nav>
  );
};
