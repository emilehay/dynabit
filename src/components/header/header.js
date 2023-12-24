import styles from "./Header.module.scss";

import { Avatar } from "../";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <h1>Good morning, Emile</h1>
        <h5>Think of a catchy subheading.</h5>
      </div>
      <div className={styles.header_right}>
        <Avatar />
      </div>      
    </header>
  );
};
