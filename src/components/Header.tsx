import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.sep} />
      <div className={styles.right}>
        <div className={styles.icons}>
          <img className={styles.searchIcon} alt="" src="/search@2x.png" />
          <img
            className={styles.compilingIcon}
            alt=""
            src="/compiling@2x.png"
          />
          <div className={styles.equalizer}>
            <div className={styles.bound} />
            <div className={styles.rectangle62Copy} />
            <div className={styles.rectangle62Copy2} />
            <div className={styles.rectangle62Copy4} />
            <div className={styles.rectangle62Copy3} />
          </div>
          <img
            className={styles.stockholmIconsShoppingC}
            alt=""
            src="/stockholm-icons--shopping--cart3@2x.png"
          />
          <img
            className={styles.layout4BlocksIcon}
            alt=""
            src="/layout4blocks@2x.png"
          />
        </div>
        <div className={styles.nickThomas}>Nick Thomas</div>
        <div className={styles.initialIcon}>
          <div className={styles.rectangle} />
          <div className={styles.n}>N</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
