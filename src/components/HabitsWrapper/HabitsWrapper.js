import { Drawer } from "../Drawer/Drawer";
import { HabitCard } from "../HabitCard/HabitCard";
import { HabitDetail } from "../HabitDetail/HabitDetail";

import { useState } from "react";

import styles from "./HabitsWrapper.module.scss";

export const HabitsWrapper = ({ habits }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeHabit, setActiveHabit] = useState(null);

  const selectHabit = (habit) => {
    setActiveHabit(habit);
    setDrawerOpen(true)
  }

  return (
    <div className={styles.habits_wrapper}>
      <Drawer
        open={drawerOpen}
        closeDrawer={() => {
          setDrawerOpen(false);
        }}
      >
        <HabitDetail habit={activeHabit} />
      </Drawer>
      {habits.map((habit) => {
        return <HabitCard habit={habit} selectHabit={selectHabit}/>;
      })}
    </div>
  );
};
