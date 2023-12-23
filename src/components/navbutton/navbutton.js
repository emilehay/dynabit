import styles from "./navbutton.module.scss";

export const NavButton = ({ icon }) => {
  return (
    <button className={styles.nav_button}>
      <img src={icon}></img>
    </button>
  );
};
