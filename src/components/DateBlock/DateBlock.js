import styles from "./DateBlock.module.scss";

export const DateBlock = ({ label, number }) => {
  return (
    <button className={styles.date_block}>
      <sup>{label}</sup>
      <h2>{number}</h2>
    </button>
  );
};
