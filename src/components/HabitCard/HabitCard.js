import styles from "./HabitCard.module.scss";

import checkCircle from "../../assets/icons/circle.svg";

export const HabitCard = ({ habit }) => {
  let { title } = habit;
  return (
    <div className={styles.habit_card}>
      <div>
        <h5>{title}</h5>
      </div>
      <div>
        <div className={styles.habits_history}>
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
