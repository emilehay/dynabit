import styles from "./Icon.module.scss";

export const Icon = ({ icon, color }) => {
  return (
    <div className={styles.icon_wrapper}>
      <i class={`fa-solid fa-${icon}`} style={{ color: color }}></i>
    </div>
  );
};
