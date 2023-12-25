import styles from "./HabitDetail.module.scss";

export const HabitDetail = ({ habit }) => {

  return (
    <div className={styles.habit_detail}>
      <div className={styles.habit_header}>
        <h1>{habit?.title}</h1>
      </div>
    </div>
  );
};
