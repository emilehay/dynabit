import { DatesRow, HabitsWrapper } from "../../components";
import { Footer, Header } from "../../components";

import styles from "./Home.module.scss";

let habits = [
  { title: "Make the bed", icon: { color: "#76a2f8", icon: "bed" } },
  { title: "Care for my heels", icon: { color: "#d7916c", icon: "hand-holding-medical" } },
  { title: "Exercise", icon: { color: "#94d2f3", icon: "dumbbell" } },
];

export const Home = () => {
  return (
    <div className={styles.page_home}>
      <Header />
      <DatesRow />
      <div className={styles.page_content}>
        <h3>Today's habits</h3>
        <HabitsWrapper habits={habits} />
      </div>
      <Footer />
    </div>
  );
};
