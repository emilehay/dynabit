import { DatesRow, HabitsWrapper } from "../../components";
import { Footer, Header } from "../../components";

import styles from "./Home.module.scss";

let habits = [{ title: 'Make the bed', }, { title: 'Care for my heels' }, { title: 'Exercise' }]

export const Home = () => {
  return (
    <div className={styles.page_home}>
      <Header />
      <DatesRow />
      <HabitsWrapper habits={habits} />
      <Footer />
    </div>
  );
};
