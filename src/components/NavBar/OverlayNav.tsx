import React from "react";
import styles from "./OverlayNav.module.scss";
import { FaFileCsv } from "react-icons/fa";

export function OverlayNavBar() {
  return (
    <nav className={styles.overlayNav}>
      <ul role="list">
        <li>
          <a href="">
            <FaFileCsv />
          </a>
        </li>
      </ul>
    </nav>
  );
}
