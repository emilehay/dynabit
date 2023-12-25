import styles from "./Drawer.module.scss";
import { ReactSVG } from "react-svg";

import closeIcon from "../../assets/icons/close.svg";

export const Drawer = (props) => {
  return (
    <div className={`${styles.backdrop} ${props.open ? styles.open : ""}`}>
      <div className={`${styles.drawer} ${props.open ? styles.open : ""}`}>
        <div className={styles.drawer_close}>
          <button
            onClick={() => {
              props.closeDrawer();
            }}
          >
            <ReactSVG src={closeIcon} />
          </button>
        </div>
        <div className={styles.drawer_container}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
