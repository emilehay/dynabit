import styles from "./DateBlock.module.scss";

export const DateBlock = ({ active, label, number }) => {
  return (
    <button className={`${styles.date_block} ${active ? styles.active : ''}`}>
      <sup>{label}</sup>
      <h2>{number}</h2>
    </button>
  );
};
