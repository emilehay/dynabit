import { ReactSVG } from "react-svg";
import styles from "./Meta.module.scss";

export const Meta = ({ icon, text }) => {
  return (
    <div className={styles.meta}>
      <ReactSVG src={icon} />
      {text}
    </div>
  );
};
