import { useState } from "react";
import { FieldGroup } from "../FieldGroup/FieldGroup";
import styles from "./AddEditHabit.module.scss";

export const AddEditHabit = ({ type }) => {
  const [habitFrequency, setHabitFrequency] = useState(null);
  const [habitDays, setHabitDays] = useState([]);
  const [timesPerWeek, setTimesPerWeek] = useState(null);

  const toggleHabitDay = (value) => {
    if (habitDays.includes(value)) {
      setHabitDays(habitDays.filter((day) => day !== value));
    } else {
      setHabitDays([...habitDays, value]);
    }
  };

  const habitFrequencyOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "interval", label: "Interval" },
  ];

  const dayOptions = [
    { value: "mon", label: "Monday" },
    { value: "tue", label: "Tuesday" },
    { value: "wed", label: "Wednesday" },
    { value: "thu", label: "Thursday" },
    { value: "fri", label: "Friday" },
    { value: "sat", label: "Saturday" },
    { value: "sun", label: "Sunday" },
  ];

  const timesPerWeekOptions = [
    { value: "1", label: "Once" },
    { value: "2", label: "Twice" },
    { value: "3", label: "Three times" },
    { value: "4", label: "Four times" },
    { value: "5", label: "Five times" },
    { value: "6", label: "Six times" },
    { value: "7", label: "Seven times" },
  ];

  return (
    <div className={styles.add_edit_habit}>
      <h1>Add a new habit</h1>
      <div className={styles.add_edit_habit_container}>
        <FieldGroup label="Name your habit" type="text" />
        <FieldGroup
          label="Habit frequency"
          type="radio"
          options={habitFrequencyOptions}
          handleOptionChange={(value) => {
            setHabitFrequency(value);
          }}
          value={habitFrequency}
        />
        {habitFrequency === "daily" && (
          <FieldGroup
            label="Days of the week"
            type="checkbox"
            options={dayOptions}
            handleOptionChange={(value) => {
              toggleHabitDay(value);
            }}
            value={habitDays}
          />
        )}
        {habitFrequency === "weekly" && (
          <FieldGroup
            label="Times per week"
            type="select"
            options={timesPerWeekOptions}
            handleOptionChange={(value) => {
              setTimesPerWeek(value);
            }}
          />
        )}
        {habitFrequency === "interval" && (
          <FieldGroup
            label="Every X days"
            type="number"
          />
        )}
      </div>
    </div>
  );
};
