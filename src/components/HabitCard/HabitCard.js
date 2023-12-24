import { ReactSVG } from "react-svg";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Meta } from "../Meta/Meta";

import styles from "./HabitCard.module.scss";

import check from '../../assets/icons/check.svg'

const percentage = 66;

export const HabitCard = ({ habit }) => {
  let { title } = habit;
  return (
    <div className={styles.habit_card}>
      <div className={styles.habit_details}>
        <h3>{title}</h3>
        <div className={styles.habit_meta}>
          {habit.meta.map((meta) => {
            return <Meta icon={meta.icon} text={meta.text} />;
          })}
        </div>
      </div>
      <div className={styles.checkbox_wrapper}>
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: "var(--primary)",
            trailColor: "var(--grey)"
          })}
          value={66}
        >
          <ReactSVG className={styles.check_icon} src={check} />
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};
