import { DateBlock } from "../DateBlock/DateBlock";
import styles from "./DatesRow.module.scss";

export const DatesRow = () => {
  let dates = [
    {
      active: true,
      label: "sat",
      day: 23,
    },
    {
      label: "fri",
      day: 22,
    },
    {
      label: "thu",
      day: 21,
    },
    {
      label: "wed",
      day: 20,
    },
    {
      label: "tue",
      day: 19,
    },
  ];

  return (
    <div className={styles.dates_row}>
      {dates.map((date) => {
        return (
          <DateBlock
            active={date.active}
            label={date.label}
            number={date.day}
          />
        );
      })}
    </div>
  );
};
