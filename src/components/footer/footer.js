import styles from "./footer.module.scss";

import { NavButton } from "../";

import calendarIcon from "../../assets/icons/calendar.svg";
import calendarIconActive from "../../assets/icons/calendar-filled.svg"
import homeIcon from "../../assets/icons/home.svg";
import homeIconActive from "../../assets/icons/home-filled.svg";
import listIcon from "../../assets/icons/list.svg";
import plusIcon from "../../assets/icons/circle-plus.svg";
import plusIconActive from "../../assets/icons/circle-plus-filled.svg";
import settingsIcon from "../../assets/icons/cog.svg";
import settingsIconActive from "../../assets/icons/cog-filled.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NavButton active={true} icon={homeIcon} icon_active={homeIconActive} />
      <NavButton icon={listIcon} icon_active={listIcon} />
      <NavButton icon={plusIcon} icon_active={plusIconActive} />
      <NavButton icon={calendarIcon} icon_active={calendarIconActive} />
      <NavButton icon={settingsIcon} icon_active={settingsIconActive} />
    </footer>
  );
};
