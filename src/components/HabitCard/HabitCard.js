import styles from "./HabitCard.module.scss";

import checkCircle from "../../assets/icons/circle.svg";
import { Icon } from "../";

export const HabitCard = ({ habit }) => {
  let { title } = habit;
  return (
    <div className={styles.habit_card}>
      <Icon {...habit.icon} />
      <div className={styles.habit_details}>
        <h3>{title}</h3>
        <div className={styles.habit_history}>
          <img src={checkCircle} />
          <img src={checkCircle} />
          <img src={checkCircle} />
          <img src={checkCircle} />
          <img src={checkCircle} />
        </div>
      </div>
    </div>
  );
};
