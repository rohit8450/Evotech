import { FunctionComponent } from "react";
import styles from "./GiftsSection.module.css";

const GiftsSection: FunctionComponent = () => {
  return (
    <div className={styles.cats}>
      <div className={styles.cart6}>
        <div className={styles.greatGifts}>Great Gifts</div>
        <img className={styles.gengen002Icon} alt="" src="/gengen002@2x.png" />
      </div>
      <div className={styles.cart5}>
        <div className={styles.greatGifts}>Great Gifts</div>
        <img className={styles.gengen002Icon} alt="" src="/ecmecm002@2x.png" />
      </div>
      <div className={styles.cart4}>
        <div className={styles.greatGifts}>Great Gifts</div>
        <img className={styles.gengen002Icon} alt="" src="/absabs025@2x.png" />
      </div>
      <div className={styles.cart3}>
        <div className={styles.greatGifts}>Great Gifts</div>
        <img className={styles.gengen002Icon} alt="" src="/tehteh004@2x.png" />
      </div>
      <div className={styles.cart2}>
        <div className={styles.greatGifts}>Great Gifts</div>
        <img className={styles.gengen002Icon} alt="" src="/tehteh008@2x.png" />
      </div>
      <div className={styles.cart1}>
        <div className={styles.greatGifts}>Great Gifts</div>
        <img className={styles.gengen002Icon} alt="" src="/ecmecm007@2x.png" />
      </div>
    </div>
  );
};

export default GiftsSection;
