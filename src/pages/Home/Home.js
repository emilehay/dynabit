import { DatesRow, HabitsWrapper } from "../../components";
import { Header } from "../../components";

import fire from "../../assets/icons/fire.svg";
import clock from "../../assets/icons/clock.svg";

import styles from "./Home.module.scss";

let habits = [
  {
    title: "Make the bed",
    progress: 100,
    meta: [
      { icon: clock, text: "10:00" },
      { icon: fire, text: "3" },
    ],
  },
  {
    title: "Care for my heels",
    progress: 40,
    meta: [
      { icon: clock, text: "12:00" },
      { icon: fire, text: "4" },
    ],
  },
  {
    title: "Exercise",
    progress: 0,
    meta: [
      { icon: clock, text: "16:00" }, 
      { icon: fire, text: "3" },
    ],
  },
];

export const Home = () => {
  return (
    <div className={styles.page_home}>
      <Header />
      <DatesRow />
      <div className={styles.page_content}>
        <h2>Today's habits</h2>
        <HabitsWrapper habits={habits} />
      </div>
      
    </div>
  );
};
