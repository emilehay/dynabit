import styles from "./Avatar.module.scss";

import fallbackAvatar from "../../assets/images/avatar.png";

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src={fallbackAvatar} alt="user avatar" />
    </div>
  );
};
