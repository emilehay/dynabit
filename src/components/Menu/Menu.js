import { IonButton } from "@ionic/react";

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
      <IonButton fill="clear" routerLink="/home">
        <NavButton icon={homeIcon} icon_active={homeIconActive} />
      </IonButton>
      <IonButton fill="clear" routerLink="/habits">
        <NavButton icon={listIcon} icon_active={listIcon} link="" />
      </IonButton>
      <IonButton fill="clear" routerLink="/calendar">
        <NavButton icon={calendarIcon} icon_active={calendarIconActive} />
      </IonButton>
      <IonButton fill="clear" routerLink="/stats">
        <NavButton icon={chartIcon} icon_active={chartIcon} />
      </IonButton>
      <IonButton fill="clear" routerLink="/settings">
        <NavButton icon={settingsIcon} icon_active={settingsIconActive} />
      </IonButton>
    </footer>
  );
};
