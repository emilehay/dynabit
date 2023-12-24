import styles from "./Meta.module.scss";

export const Meta = ({ icon, text }) => {
  return (
    <div className={styles.meta}>
      <img src={icon} alt="" />
      {text}
    </div>
  );
};
