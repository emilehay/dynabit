import { ReactSVG } from "react-svg";

import styles from "./navbutton.module.scss";

export const NavButton = ({ active, icon, icon_active }) => {
  return (
    <button className={`${styles.nav_button} ${active ? styles.active : ""}`}>
      <ReactSVG src={active ? icon_active : icon} />
    </button>
  );
};
