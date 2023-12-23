import { HabitCard } from "../HabitCard/HabitCard";

import styles from "./HabitsWrapper.module.scss";

export const HabitsWrapper = ({ habits }) => {
  return (
    <div className={styles.habits_wrapper}>
      {/* {habits.map((habit) => {
        return <HabitCard habit={habit} />;
      })} */}
    </div>
  );
};
