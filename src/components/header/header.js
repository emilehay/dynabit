import styles from "./Header.module.scss";

import { Avatar } from "../";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>

      </div>
      <div className={styles.header_right}>
        <Avatar />
      </div>      
    </header>
  );
};
