import { useState } from "react";
import styles from "./Drawer.module.scss";
import { ReactSVG } from "react-svg";

import closeIcon from "../../assets/icons/close.svg";
import { IonButton, IonIcon } from "@ionic/react";

export const Drawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.backdrop} ${open ? styles.open : ""}`}>
      <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <div className={styles.drawer_close}>
          <button onClick={() => { setOpen(false); }}>
            <ReactSVG src={closeIcon} />
          </button>
        </div>
        Hello
      </div>
    </div>
  );
};
