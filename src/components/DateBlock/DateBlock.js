import styles from "./DateBlock.module.scss";

export const DateBlock = ({ active, index, label, number, setActiveDay }) => {
  return (
    <button
      className={`${styles.date_block} ${active ? styles.active : ""}`}
      onClick={() => {
        setActiveDay(index);
      }}
    >
      <sup>{label}</sup>
      <h2>{number}</h2>
    </button>
  );
};
