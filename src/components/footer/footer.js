import styles from "./footer.module.scss";

import { NavButton } from "../"

import calendarIcon from '../../assets/icons/calendar.svg'
import homeIcon from '../../assets/icons/home.svg'
import listIcon from '../../assets/icons/list.svg'
import settingsIcon from '../../assets/icons/cog.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NavButton icon={homeIcon} label={"Home"}/>
      <NavButton icon={listIcon} label={"Habits"}/>
      <NavButton icon={calendarIcon} label={"Calendar"}/>
      <NavButton icon={settingsIcon} label={"Settings"}/>
    </footer>
  );
};
