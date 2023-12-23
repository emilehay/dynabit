import { DatesRow } from "../DatesRow/DatesRow";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.greeting_wrapper}>
        <h1>Hi, Emile 👋</h1>
        <h5>Good luck for the day!</h5>
      </div>
      <div className={styles.dates_wrapper}>
        <DatesRow />
      </div>
    </header>
  );
};
