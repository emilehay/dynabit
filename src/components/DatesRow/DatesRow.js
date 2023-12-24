import { useEffect, useState } from "react";
import { DateBlock } from "../DateBlock/DateBlock";
import styles from "./DatesRow.module.scss";

export const DatesRow = () => {
  const [activeDay, setActiveDay] = useState(4);
  const [dates, setDates] = useState();

  const getDates = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return Array.from({ length: 5 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return {
        day: d.getDate(),
        label: days[d.getDay()],
      };
    }).reverse();
  };

  useEffect(() => {
    setDates(getDates());
  }, getDates);

  return (
    <div className={styles.dates_row}>
      {dates?.map((date, index) => {
        return (
          <DateBlock
            index={index}
            setActiveDay={(index) => {
              setActiveDay(index);
            }}
            active={index === activeDay}
            label={date.label}
            number={date.day}
          />
        );
      })}
    </div>
  );
};
