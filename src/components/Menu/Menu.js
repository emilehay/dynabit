import styles from "./Menu.module.scss";

import { NavButton } from "..";

import calendarIcon from "../../assets/icons/calendar.svg";
import calendarIconActive from "../../assets/icons/calendar-filled.svg";
import homeIcon from "../../assets/icons/home.svg";
import homeIconActive from "../../assets/icons/home-filled.svg";
import listIcon from "../../assets/icons/list.svg";
import chartIcon from "../../assets/icons/chart.svg";
import settingsIcon from "../../assets/icons/cog.svg";
import settingsIconActive from "../../assets/icons/cog-filled.svg";

export const Menu = () => {
  return (
    <footer className={styles.menu}>
      <NavButton active={true} icon={homeIcon} icon_active={homeIconActive} />
      <NavButton icon={listIcon} icon_active={listIcon} />
      <NavButton icon={calendarIcon} icon_active={calendarIconActive} />
      <NavButton icon={chartIcon} icon_active={chartIcon} />
      <NavButton icon={settingsIcon} icon_active={settingsIconActive} />
    </footer>
  );
};
