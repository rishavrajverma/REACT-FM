import React from "react";
import styles from "../asets/Style/Header.module.css";
import emarates from "../asets/Images/emirates.png";
import client from "../asets/Images/logoheader.png";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <img className={styles.imageLogo} src={emarates} alt="Logo" />

      <div className={styles.headerContainer}>
        <div className={styles.logoLeft}>
          <img className={styles.imageLogo1} src={client} alt="Logo" />
        </div>

        <div className={styles.headerRight}>
          <div className={styles.separator}></div>

          <div className={styles.profile}>
            <img src="https://i.pravatar.cc/150?img=12" alt="User" />
            <button className={styles.admin}>User</button>
            <div className={styles.separator}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
